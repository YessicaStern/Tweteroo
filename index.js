import express from "express";
import cors from "cors";

const server=express();
server.use(cors());
server.use(express.json());

const user=[];
const tweets=[];

let pageSize=10;
function paginate(page=1){
    return tweets.slice(pageSize*(page-1),pageSize*page);
}

server.get("/sign-up",(req,res)=>{
    res.send(user);
});
server.post("/sign-up",(req,res)=>{
    user.push(req.body);
    res.send("OK");
});
server.get("/tweets",(req,res)=>{
    res.send(paginate(1));
});
server.post("/tweets",(req,res)=>{
    const tweet=req.body;
    const avatar=tweet.avatar;
    
    tweets.unshift({...tweet, avatar:user[0].avatar});
    res.send("OK");
});

server.listen(5000,()=>{console.log("Deu bom")});