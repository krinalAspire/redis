const express = require("express");
const app = express();
const redisclient = require("./redis")

app.use(express.json());

const listKey = 'Mylist';

const listValues = ['1', '2', '3'];

// app.post('/test', async (req, res) => {
//     const data = await redisclient.hGetAll('hlist')
//     console.log(data);
// })

// app.get('/test', async (req, res) => {
//     const data = await redisclient.hSet('hlist','name','john')
//     console.log(data);
//     res.send(data)
// })

app.get('/set' , async(req,res)=>{
    const data = await redisclient.
    res.send(data)
    console.log(data);
})

app.post('/set',async(req,res)=>{
    const data=await redisclient.lPush(listKey,listValues);
    // res.send(data);
    console.log(data);
})


app.listen(2020, () => {
    console.log("server connected");
})
