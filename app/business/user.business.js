const { createUser  } = require('../datasource/user.datasource');

async function createUserBusiness (nome, email, senha){
  try{
    const newUser = await createUser( nome, email, senha );
    return user = {
      "createdAt": newUser.createdAt,
      "updatedAt": newUser.updatedAt,
      "id": newUser.id,
      "nome": newUser.nome,
      "email": newUser.email,
    };
  }catch(error){
    throw error;
  }
};

module.exports = {
  createUserBusiness,
}