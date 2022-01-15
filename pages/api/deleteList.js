import { connectToDatabase } from "../../lib/mongodb";


export default async function handler(req,res){
    const { db } = await connectToDatabase()
    const data  = req.query
    
    await db.collection('Queue').deleteMany({})
    .then(()=>{
        res.json({message : "deleted"});
    }) 
    .catch((err)=>{
        res.json({message:"error in database"});
        console.log(err);
    })


}