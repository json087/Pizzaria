const express = require('express');
const cors = require('cors')
const usersRoutes = require('./routes/users')
const app = express();
const authenticationRouter = require('./routes/authentication')

app.use('/api/authentication', authenticationRouter)
app.use(
  cors({
    origin: 'http://localhost:3000', // Permite apenas o frontend que está rodando em http://localhost:3000
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
  })
);
app.use(express.json())
app.use("/api/users", usersRoutes)

app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

app.listen(3002, ()=>{
  console.log('servidor está funcionando');
  
})

module.exports = app;
