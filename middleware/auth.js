const { verificarToken } = require('../service/tokenService');

function authMiddleware(req, res,next){
  const token = req.headers['authorization'];
  
  if(!token){
    return res.status(401).json({error: 'Token não fornecido'});
  }

  const decodedPayload = verificarToken(token);
  if (!decodedPayload){
    return res.status(401).json({ error: 'Token inválido ou expirado'});
  }

  req.user = decodedPayload;
  console.log(req.user);
  next();
}

module.exports = authMiddleware;