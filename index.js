import express from "express";
import cors from "cors";

const server=express();
server.use(cors());
server.use(express.json());

const user=[];
const tweets=[];

server.get("/sign-up",(req,res)=>{
    res.send(user[0].avatar);
});
server.post("/sign-up",(req,res)=>{
    user.push(req.body);
    res.send("OK");
});
server.get("/tweets",(req,res)=>{
    res.send(tweets);
});
server.post("/tweets",(req,res)=>{
    const tweet=req.body;
    const tweetAvatar=tweet.avatar;
    tweets.push({...tweet, tweetAvatar:user[0].avatar});
    res.send("OK TT");
});

server.listen(5000,()=>{console.log("Deu bom")});