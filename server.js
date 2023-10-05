const express = require('express')
const mysql = require('mysql2')
const myconn = require('express-myconnection')
const cors = require('cors');

const routes = require('./routes')

if(process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}

const app = express()

const PORT = process.env.PORT || 3000;

const dbOptions = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '1234',
    database: process.env.DB_DATABASE || 'prueba',
}
// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors());

// routes -------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})
app.use('/api', routes)

console.log(dbOptions, PORT)

// server running -----------------------------------
app.listen(PORT, ()=>{
    console.log('server running on port', PORT)
})