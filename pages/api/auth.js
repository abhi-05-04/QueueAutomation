import { connectToDatabase } from "../../lib/mongodb";


export default async function handler(req,res){
    const { db } = await connectToDatabase()
    const data  = req.query
    const findingData = await db.collection('Admin').findOne({email :data.email , password : data.password} )
    if(findingData == null){
        await db.collection('Admin').insertOne(data)
        .then((result)=>{
            let id = result.insertedId;
            res.send(id);
        }) 
        .catch((err)=>{
            res.json({message:"error in database"});
            console.log(err);
        })
    }
    else{
        res.json({'user':'already exits'});
    }

}