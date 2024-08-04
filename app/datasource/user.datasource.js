const { User } = require ('../../database/models');

async function createUser (nome, email, senha){
  try{
    const newUser = await User.create({ nome, email, senha });
    return newUser;
  }catch(error){
    throw error;
  }
};  

module.exports = {
  createUser,
};
