const express=require("express")();
const os=require("os");

express.get("/",(req,res)=>{
const totalMemory=os.totalmem()/(1024**3);
const availableMemory=os.freemem()/(1024**3)
res.status(200).json({totalMemory,availableMemory})
})

express.listen(8000,()=>{
    console.log("server running on port 8000")
})