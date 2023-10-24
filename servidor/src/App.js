import express from 'express';
import morgan from 'morgan';
import ConnectDB from './config/db.js';

const APP = express();
const PORT = 3000

APP.use(express.json());
APP.use(morgan(`dev`))




APP.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
    ConnectDB();
})