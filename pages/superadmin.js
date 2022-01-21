import React, { useState ,useEffect } from 'react'
import Nav from '../components/Nav'
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
export default function login({token , date}) {
    const router = useRouter();
    console.log(process.env.SUPERADMIN);
    let adminList = [] , queueOfAdmin = [];

    const init = async ()=>{
        console.log(token.toString());
        if(token != "61e9fb68c8ccdf59618b0904"){
            router.replace('/');
        }
        try {
            await fetch('http://localhost:3000/api/getAdminList',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(async(result)=>{
                await result.json()
                .then((x)=>{
                    adminList = x;
                })
                .catch((err)=>{
                    console.log(err);
                })
            })
            .then((err)=>{
                console.log(err);
            })
        } catch (err) {
            console.log(err);
        }
        

        for(let i=0;i<adminList.length;i++){
            console.log(adminList[i]._id);
            let ithList  = [];


            try {
                await fetch(`http://localhost:3000/api/getList?admin=${adminList[i]._id}`,{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(async(result)=>{
                    await result.json()
                    .then((x)=>{
                        queueOfAdmin.push(x);
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
                })
                .then((err)=>{
                    console.log(err);
                })
            } catch (err) {
                console.log(err);
            }
        }
        for(let i=0;i<adminList.length;i++){
            console.log(adminList[i]);
            console.log(queueOfAdmin[i]);
            console.log();
        }
    }

    useEffect(()=>{
        init();
    },[]);

    return (
        <div>
            <Nav cook={token} />

        </div>
    )
}




export function getServerSideProps({ req , res }){
    let token = "" , date = "";
    if(req.cookies.user != undefined){
        token = req.cookies.user;
    }
    if(req.cookies.date  != undefined){
        date = req.cookies.date;
    }
    return { props : { token : token , date : date } };
}



// export const getServerSideProps = async({req,res})=>{
//     // console.log(req.url);
//     let date = new Date();
//     // console.log(date.getDate());
//     let url = req.url.split('/');

//     let reqURL = "localhost:3000/";
//     for(let i=1;i<url.length;i++)
//         reqURL = reqURL + url[i] + '/';
//     reqURL = reqURL + date.getDate();
//     let adminId = url[url.length-1];
//     let cook = req.cookies.user;


//     let getList = await fetch(`http://localhost:3000/api/getList?admin=${adminId}`);
        
//     const response = await getList.json();
//     let d = "";
//     if(req.cookies.date  != undefined){
//         d = req.cookies.date;
//     }
    
//     return {props : {admin :  adminId , cook : cook , list : response,reqURL:reqURL , date : d}}

// }

