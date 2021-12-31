import { connectToDatabase } from "../../lib/mongodb";


export default async function handler(req,res){
    const { db } = await connectToDatabase()
    const data  = req.query
    await db.collection('Admin').findOne({email :data.email , password : data.password} )
    .then((findingData)=>{
        console.log(findingData);
        if(findingData != null){
            res.json(findingData);
        }
        else{
            res.json({'user':'Wrong Credentials'});
        }
    })
    

}