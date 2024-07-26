const { createUserBusiness  } = require('../business/user.business');

const createUser = async(req,res)=>{
  try{
    const { nome,email,senha } = req.body;
    const user = await createUserBusiness(nome, email, senha);
    return res.status(200).json({ user });
  }catch(error){
      res.status(500).json({ error: 'Erro ao criar usuário' })
  }
  
  
}

module.exports = {
  createUser,
};
