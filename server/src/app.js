import express from "express"; 

const app = express(); 

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('<h1>everthing is working fine! </h1>');
})
app.get('/name',(req,res)=>{
    res.send('my name is deepak')
})

export default app;