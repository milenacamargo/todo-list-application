const { newLoginBusiness  } = require('../business/auth.business');


const login = async (req,res) =>{
  const { email, senha } = req.body;
  if (!email || !senha) {
    return res.status(400).json({ error: 'Email e senha são obrigatórios' });
  }
  try{
    const login = await newLoginBusiness(email, senha) ;
    return res.status(200).json({ login })
  }catch(error){
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  login,
};