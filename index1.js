import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send("hello")
})

app.listen(7005, ()=>{
    console.log("server running at port 7005")
})