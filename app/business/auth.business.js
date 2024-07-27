const { newLoginData } = require('../datasource/auth.datasource');
const { gerarToken  } = require('../service/tokenService');


async function newLoginBusiness (email, senha){
  try{
    const login = await newLoginData(email, senha);
    const token = gerarToken({user: login.user.dataValues });

    return token;
  }catch(error){
    return { error:error.message };
  }
};


module.exports = {
  newLoginBusiness,
};