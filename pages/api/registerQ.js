import { connectToDatabase } from "../../lib/mongodb";


export default async function handler(req,res){
    const { db } = await connectToDatabase()
    const data  = req.query
    
    console.log(data);
    await db.collection('Queue').findOne({'phone' : data.phone , 'admin' : data.admin})
    .then(async(candFound)=>{
        if(!candFound){
            await db.collection('Queue').insertOne(data)
            .then((result)=>{
                let id = result.insertedId;
                console.log(id);
                res.send(id);
            }) 
            .catch((err)=>{
                res.json({message:"error in database"});
                console.log(err);
            })
        }
    })

   


}