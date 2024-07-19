const { gerarToken  } = require('../../service/tokenService');
const { User } = require('../../models');

const login = async (req,res) =>{
  const { email, senha } = req.body;
  if (!email || !senha) {
    return res.status(400).json({ error: 'Email e senha são obrigatórios' });
  }
  try{
    const user = await User.findOne({ where: { email }});

    if(!user || (await user.validarSenha(senha))){
      return res.status(401).json({ error: 'Credenciais inválidas'});
    }

    const token = gerarToken({id:user.id, email: user.email});
    res.json({ token });
  }catch(error){
    res.status(500).json({ error: 'Erro ao fazer login'});
  }
};

const logout = async(req, res) =>{
  res.json({ message: 'Logout realizado com sucesso' });
}


module.exports = {
  login,
  logout,
};