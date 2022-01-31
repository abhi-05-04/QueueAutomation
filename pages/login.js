// import React, { useState ,useEffect } from 'react'
// import Nav from '../components/Nav'
// import { useRouter } from 'next/router';
// import Cookies from 'js-cookie';
// import { route } from 'next/dist/server/router';

// export default function login({token , date}) {

//     const router = useRouter();

//     const redir = ()=>{
//         router.replace('/');
//     }


//     const setDate = async()=>{
//         const D = new Date();
//         let d = D.getDate(); 
//         // d = 16;
//         console.log(date+"  "+d);
//         if(d != date){
//             console.log("confilct");
//             Cookies.set("date",d,{expires:24/24});
//             await fetch(`https://queue-mu.vercel.app/api/deleteList`);
//             console.log("deleted");
//         }
//     }
//     useEffect(()=>{
//         setDate();
//         if(token != "") 
//             redir();
//     },[]);

//     const handleLogin = async (event)=>{
//         event.preventDefault();
//         if(validate())
//         {
//             try{
//                 await fetch(`https://queue-mu.vercel.app/api/auth?email=${email}&password=${pass}`,{
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                 })
//                 .then(async(result)=>{
//                     await result.json()
//                     .then((x)=>{
                        
//                         let id = x._id;
//                         console.log(id);
//                         if(id != null && id != undefined){
//                             Cookies.set("user",id,{expires:1/24});
//                         }
//                         else{
//                             alert("Wrong Credentials!")
//                         }
                        
//                         router.reload('/login');
//                     })
//                     .catch((err)=>{
//                         console.log(err);
//                     })
//                 })
//                 .catch((err)=>{
//                     console.log(err);
//                 })
//             }
//             catch(err){
//                 console.log(err);
//             }
//         }
//     }

//     const [email,setEmail] = useState("");
//     const [pass,setPass] = useState("");


//     const validate = () => {
//         if (email === "") {
//             alert("Enter Email!");
//             return;
//         }
//         if(pass === "")
//         {
//             alert("Enter password!");
//             return;
//         }
//         return true;

//     }


//     return (
//         <div>
//             <Nav cook={token} />

//             <form className="container text-center border border-light p-5" action="#!">

//                 <p className="h4 mb-4">Sign in</p>

//                 <input 
//                     type="email" 
//                     id="defaultLoginFormEmail" 
//                     className="form-control mb-4" 
//                     placeholder="E-mail" 
//                     onChange={(e)=>{setEmail(e.target.value)}}
//                 />

//                 <input 
//                     type="password" 
//                     id="defaultLoginFormPassword" 
//                     className="form-control mb-4" 
//                     placeholder="Password" 
//                     onChange={(e)=>{setPass(e.target.value)}}
//                 />

//                 <div>
//                     <button 
//                         className="btn btn-info btn-block my-4" 
//                         type="submit"
//                         onClick={handleLogin}
//                     >
//                         Sign in
//                     </button>
//                 </div>
//                 <p>Not a member?
//                     <a href="/signup">Register</a>
//                 </p>
//             </form>
//         </div>
//     )
// }




// export function getServerSideProps({ req , res }){
//     let token = "" , date = "";
//     if(req.cookies.user != undefined){
//         token = req.cookies.user;
//     }
//     if(req.cookies.date  != undefined){
//         date = req.cookies.date;
//     }
//     return { props : { token : token , date : date } };
// }



import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {useState , useEffect} from 'react'
export default function (props) {

    const [num , setNum] = useState("");
    const init = async () => {
        var index;
        for (index = 1; index < props.response.length; index++) {
            if(props.response[index]._id == props.userId)
            {
                setNum(index+1);
            }
        }
    };

    useEffect(() => {
        init();
    }, []);

    // useEffect(() => {
    //     window.addEventListener('load', (event) => {
    //         init();
    //     });
    // })


    return (
        <div style={{margin : 30}}>
            <div className="container card text-white bg-info mb-3" style={{maxWidth : 250}}>
                <div className="card-header">Wait</div>
                <div className="card-body">
                    <h5 className="card-title">Your number in Queue {num} </h5>
                    <p className="card-text">
                    You have sucessfully added yourself to the Queue. Once your number
                        will come we will notify you by message.But to live track Don't Exit
                        From this Page otherwise you will not able track you live.
                    </p>
                </div>
            </div>
        </div>
    );
}

export const getServerSideProps = async ({ req, res }) => {
    let url = req.url.split('/');

    let reqURL = "queue-mu.vercel.app/:3000/";
    for (let i = 1; i < url.length; i++)
        reqURL = reqURL + url[i] + '/';
    let adminId = url[url.length - 3];
    let userId  = url[url.length - 1]


    let getList = await fetch(`https://queue-mu.vercel.app/:3000/api/getList?admin=${adminId}`);

    const response = await getList.json();
    // console.log(response.length);
    // var num = 0;
    // console.log(response);
    
    // if(response.some(id=>id._id === userId))
    // {
    //     for (index = 1; index < response.length; index++) {
    //             if(response[index]._id == userId)
    //             {
    //                 num = index+1;
    //                 return { props: { num : num} };
    //             }
    //         }
    // } else {
    //     num = 0;
    // }

    // console.log(userId);

    return { props: { response : response , userId: userId} }
    

}
