import { connectToDatabase } from "../../lib/mongodb";


export default async function handler(req,res){
    const { db } = await connectToDatabase()
    const data  = req.query
    
    await db.collection('Queue').find(data).toArray()
    .then((result)=>{
        // console.log(result );
        res.json(result);
    }) 
    .catch((err)=>{
        res.json({message:"error in database"});
        console.log(err);
    })


}