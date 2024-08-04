const jwt = require('jsonwebtoken');

const chave = 'rambo';

function gerarToken(payload){
  try{

    payload.user.senha = null;
    console.log(payload);
    const token = jwt.sign(payload, chave,{expiresIn: '1h'});
    return token;
  }catch(error){
    return { error:error.message };
  }
  
 
}

function verificarToken(token){
  try {
    const decoded = jwt.verify(token, chave);
    return decoded;
  }
  catch(err){
    return { error:error.message };
  }
}


module.exports = {
  gerarToken,
  verificarToken
};