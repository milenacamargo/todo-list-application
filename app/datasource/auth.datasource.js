const { User } = require('../../database/models');

async function newLoginData (email,senha){
  try{
    const user = await User.findOne({ where: { email, senha }});
    return user;
  }catch(error){
    throw new Error();
  }
};



module.exports = {
  newLoginData,
};