import mongoose from "mongoose";

const mongodb = process.env.MONGODB

mongoose.connect(mongodb)
const conexion = mongoose.connection;
conexion.once("open",()=>{
    console.info('Bd conectada')
})