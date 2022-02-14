import { connectToDatabase } from "../../lib/mongodb";
import { ObjectId } from "mongodb";


export default async function handler(req,res){
    const { db } = await connectToDatabase()
    const data  = req.query.id
    console.log(data);  
    await db.collection('Admin').deleteOne({"_id": ObjectId(data)})
    .then(()=>{
        res.json({message : "deleted"});
    })
    .catch((err)=>{
        res.json({message:"error in database"});
        console.log(err);
    })


}