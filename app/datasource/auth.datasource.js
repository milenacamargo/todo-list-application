const { User } = require('../../database/models');

async function newLoginData (email,senha){
  try{
    const user = await User.findOne({ where: { email, senha }});

    if (!user) {
      return { error: 'Credenciais inválidas' };
    }
    return user;
  }catch(error){
    return { error: error.message};
  }
};



module.exports = {
  newLoginData,
};