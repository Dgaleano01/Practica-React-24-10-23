import express from 'express';
import morgan from 'morgan';
import ConnectDB from './config/db.js';
import employeeRoutes from './routers/employee.route.js';
import rolRoutes from './routers/rol.route.js';
import areaRoutes from './routers/area.route.js';
import cors from 'cors';

const APP = express();
const PORT = 3000

APP.use(express.json());
APP.use(morgan(`dev`))

APP.use(cors({
    origin: "http://127.0.0.1:5173",
    credentials:true
}))

APP.use('/employees', employeeRoutes);
APP.use('/rol', rolRoutes);
APP.use('/area', areaRoutes)


APP.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
    ConnectDB();
})