const { createUser  } = require('../datasource/user.datasource');

async function createUserBusiness (nome, email, senha){
  try{
    const newUser = await createUser( nome, email, senha );
    console.log( nome );
    return newUser;
  }catch(error){
    res.status(400).json({ error: error.message});
  }
};

module.exports = {
  createUserBusiness,
}