import React, { useState ,useEffect } from 'react'
import Nav from '../components/Nav'
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export default function login({token}) {

    const router = useRouter();

    const redir = ()=>{
        router.replace('/');
    }
    useEffect(()=>{
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
                    Cookies.set("user",id,{expires:1/24});
                    router.replace('/');
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
            <Nav />
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
    if(req.cookies.user != undefined){
        return { props : { token : req.cookies.user } };
    }
    return { props : {token : ""} };
}