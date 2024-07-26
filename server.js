const express = require('express');
const userRoutes = require('./app/routes/userRoutes'); 
const authRoutes = require('./app/routes/authRoutes');
const authMiddleware = require ('./app/middleware/auth');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', authRoutes);

app.get('/oi', authMiddleware, (req,res) =>{
  res.send('hello catinha!');
});

app.listen(port, ()=>{
  console.log(`Servidor rodando em http://localhost:${port}`);
})



