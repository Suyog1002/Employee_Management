import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/route.js';

const app=express(); //express server created
const port=8000;
app.use(cors(
    {
        origin: ["https://employee-management-frontend-rust.vercel.app"],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true
    }
));
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

//connection to mongodb
mongoose.connect("mongodb://user:employee@ac-rsbu7fh-shard-00-00.xmacrek.mongodb.net:27017,ac-rsbu7fh-shard-00-01.xmacrek.mongodb.net:27017,ac-rsbu7fh-shard-00-02.xmacrek.mongodb.net:27017/cluster0?ssl=true&replicaSet=atlas-12rwqn-shard-0&authSource=admin&retryWrites=true&w=majority");
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error connecting to db'));
db.once('open',()=>{
    console.log("Successfully connected to the database");
});

app.use('/',router);
app.listen(port,()=>{
    console.log("Server is Running.....");
})
