require ('dotenv').config();

const express = require('express')
const path= require('path')

const app = express()
const port = process.env.PORT;

app.use(express.json())

app.use((req, res, next) =>{
  console.log(`${req.method} reqest made to ${req.url}`);
  next();
})

app.get('/', (req, res) =>{
  res.send ('My Week 2 API!');
})

app.post('/user', (req, res) => {
  const {name, email} = req.body ;
  if(!name || !email){ return res.status(400) . json({error:'names and email are required'})};
  res.json({message: `hello,${name}!`,});
})

app.get('/user/:id',(req, res) =>{
  const id = req.params.id;
  res.send(id);
})
app.listen(port, () => {
  console.log(`Server is running on  http://localhost:${port}`)
})