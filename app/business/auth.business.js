const { newLoginData } = require('../datasource/auth.datasource');
const { gerarToken  } = require('../service/tokenService');


async function newLoginBusiness (email, senha){
  try{
    const login = await newLoginData(email, senha);

    if (!login) {
      throw new Error('Usuário não encontrado');
    }
    const token = gerarToken({user: login.dataValues });


    return token;
  }catch(error){
   throw error;
  }
};


module.exports = {
  newLoginBusiness,
};