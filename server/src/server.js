import dotenv from "dotenv";
import connectDB from "./config/db.js";
import app from "./app.js";
import {env} from './config/env.js' 

dotenv.config();

connectDB();

app.listen(env.PORT,()=>{
    console.log('working fine!');
})



