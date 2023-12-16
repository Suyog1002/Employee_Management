import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/route.js';

const app=express(); //express server created
const port=8000;
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

//connection to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/employee_details");
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error connecting to db'));
db.once('open',()=>{
    console.log("Successfully connected to the database");
});

app.use('/',router);
app.listen(port,()=>{
    console.log("Server is Running.....");
})