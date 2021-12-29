import { connectToDatabase } from "../../lib/mongodb";


export default async function handler(req,res){
    const { db } = await connectToDatabase()
    const data  = req.query
    const findingData = await db.collection('Admin').findOne({email :data.email})
    if(findingData == null){
        await db.collection('Admin').insertOne(data)
        .then((data)=>{
            res.json(data);
        }) 
        .catch((err)=>{
            res.json({message:"error in database"});
            console.log(err);
        })
        // res.json(response);
    }
    else{
        res.json({'user':'already exits'});
    }

}