import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const data = req.query;
  await db
    .collection("Admin")
    .find({_id:ObjectId(data.admin)})
    .toArray((err, docs) => {
      if (err) {
        // if an error happens
        res.send("Error in GET req.");
      } else {
        // if all works
        // console.log(docs);
        res.send(docs); // send back all users found with the matching username
      }
    });
  // .then((result)=>{
  //     // console.log(result );
  //     res.json(result);
  // })
  // .catch((err)=>{
  //     res.json({message:"error in database"});
  //     console.log(err);
  // })
  // await res.send(temp);
  // console.log(temp);
}
