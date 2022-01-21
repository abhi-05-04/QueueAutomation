import React, { useState ,useEffect } from 'react'
import Nav from '../components/Nav'
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { route } from 'next/dist/server/router';

export default function login({token , date}) {

    const router = useRouter();

    const redir = ()=>{
        router.replace('/');
    }


    const setDate = async()=>{
        const D = new Date();
        let d = D.getDate(); 
        // d = 16;
        console.log(date+"  "+d);
        if(d != date){
            console.log("confilct");
            Cookies.set("date",d,{expires:24/24});
            await fetch(`http://localhost:3000/api/deleteList`);
            console.log("deleted");
        }
    }
    useEffect(()=>{
        setDate();
        if(token != "") 
            redir();
    },[]);

    const handleLogin = async (event)=>{
        event.preventDefault();
        try{
            await fetch(`http://localhost:3000/api/auth?email=${email}&password=${pass}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(async(result)=>{
                await result.json()
                .then((x)=>{
                    
                    let id = x._id;
                    console.log(id);
                    if(id != null && id != undefined){
                        Cookies.set("user",id,{expires:1/24});
                    }
                    router.reload('/login');
                })
                .catch((err)=>{
                    console.log(err);
                })
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        catch(err){
            console.log(err);
        }
    }

    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");

    return (
        <div>
            <Nav cook={token} />

            <form className="container text-center border border-light p-5" action="#!">

                <p className="h4 mb-4">Sign in</p>

                <input 
                    type="email" 
                    id="defaultLoginFormEmail" 
                    className="form-control mb-4" 
                    placeholder="E-mail" 
                    onChange={(e)=>{setEmail(e.target.value)}}
                />

                <input 
                    type="password" 
                    id="defaultLoginFormPassword" 
                    className="form-control mb-4" 
                    placeholder="Password" 
                    onChange={(e)=>{setPass(e.target.value)}}
                />

                <div>
                    <button 
                        className="btn btn-info btn-block my-4" 
                        type="submit"
                        onClick={handleLogin}
                    >
                        Sign in
                    </button>
                </div>
                <p>Not a member?
                    <a href="/signup">Register</a>
                </p>
            </form>
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