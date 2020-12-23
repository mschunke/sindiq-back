require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes/index')

const { connectDb } = require('./database');


app.use(routes)

app.listen(process.env.SERVER_PORT, async () => {
  console.log(`Servidor iniciado ${new Date()} - Porta ${process.env.SERVER_PORT}`)
  console.log(`Banco de dados: ${process.env.DB_URI}:${process.env.DB_PORT}`)
  const conexaoDB = await connectDb() ? 'OK' : "ERRO AO CONECTAR"
  console.log(`Conexão com o banco de dados: ${conexaoDB}`)
})