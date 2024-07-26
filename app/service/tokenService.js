const jwt = require('jsonwebtoken');

const chave = 'rambo';

function gerarToken(payload){
  const token = jwt.sign(payload, chave,{expiresIn: '1h'});
  return token;
}

function verificarToken(token){
  try {
    const decoded = jwt.verify(token, chave);
    return decoded;
  }
  catch(err){
    return null;
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