const { User } = require ('../../models');

const createUser = async(req,res)=>{
  const { nome,email,senha } = req.body;
  try{
    const newUser = await User.create({ nome, email, senha });
    res.status(201).json(newUser);
  }catch(error){
    res.status(400).json({ error: error.message});
  }
};

module.exports = {
  createUser,
};