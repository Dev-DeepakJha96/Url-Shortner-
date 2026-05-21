import express from "express"; 
import cors from 'cors'; 
import helmet from "helmet"; 
import morgan from "morgan"; 
import cookieParser from "cookie-parser"; 
import compression from "compression"; 

import { errorMiddleware } from "./middlewares/error.middleware.js";
import { notFoundMiddleware } from "./middlewares/notFound.middlware.js";

const app = express(); 

app.use(helmet()); 
app.use(cors({origin : "*" , credentials : true})); 
app.use(morgan("dev")); 
app.use(compression()); 

app.use(express.json({limit : "10kb"}));
app.use(cookieParser());
app.use(express.urlencoded({extended : true })); 


app.get('/',(req,res)=>{
    res.send('<h1>everthing is working fine! </h1>');
})
app.get('/name',(req,res)=>{
    res.send('my name is deepak')
})

app.use(notFoundMiddleware); 
app.use(errorMiddleware); 

export default app;