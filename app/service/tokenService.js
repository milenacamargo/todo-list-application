const jwt = require('jsonwebtoken');

const chave = 'rambo';

function gerarToken(payload){
  try{
    payload.user.senha = null;
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


/*
if(decodedPayload){
  console.log ('Informações Decodificadas', decodedPayload);
}else{
  console.log('Token inválido ou expirado');
}*/

module.exports = {
  gerarToken,
  verificarToken
};