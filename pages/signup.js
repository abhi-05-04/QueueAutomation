import React from 'react'
import Nav from '../components/Nav'
import { useState } from 'react'
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';


export default function signup() {

    const router = useRouter();

    const [cookie,setCookie] = useCookies(["user"]);
    const [fname , setFname] = useState("");
    const [lname , setLname] = useState("");
    const [email , setEmail] = useState("");
    const [pass , setPass] = useState("");
    const [num , setNum] = useState("");

    const handleFname = (event)=>{
        setFname(event.target.value);
    }
    const handleLname = (event)=>{
        setLname(event.target.value);
    }
    const handleEmail = (event)=>{
        setEmail(event.target.value);
    }
    const handlePass = (event)=>{
        setPass(event.target.value);
    }

    const handleNum = (event)=>{
        setNum(event.target.value);
    }

    const register = async(event)=>{
        event.preventDefault();
        try{
            await fetch(`http://localhost:3000/api/newAdmin?fname=${fname}&lname=${lname}&email=${email}&password=${pass}&number=${num}`)
            .then((data)=>{
                console.log(data);
                setCookie("user" ,"pavan",{
                    path: "/",
                    maxAge: 3600, 
                    sameSite: true,
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




    return (
        <div>
            <Nav/>
            {/* <!-- Default form register --> */}
            <form className="text-center border border-light p-5" method='POST' onSubmit={register} >

                <p className="h4 mb-4">Sign up</p>

                <div className="form-row mb-4">
                    <div className="col">
                        {/* <!-- First name --> */}
                        <input type="text" id="defaultRegisterFormFirstName" onChange={handleFname} className="form-control" placeholder="First name" />
                    </div>
                    <br />
                    <div className="col">
                        {/* <!-- Last name --> */}
                        <input type="text" id="defaultRegisterFormLastName" onChange={handleLname} className="form-control" placeholder="Last name" />
                    </div>
                </div>

                {/* <!-- E-mail --> */}
                <input type="email" id="defaultRegisterFormEmail" onChange={handleEmail} className="form-control mb-4" placeholder="E-mail" />

                {/* <!-- Password --> */}
                <input type="password" id="defaultRegisterFormPassword" onChange={handlePass} className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" />
                <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                    At least 8 characters and 1 digit
                </small>

                {/* <!-- Phone number --> */}
                <input type="text" id="defaultRegisterPhonePassword" onChange={handleNum} className="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
                <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                    Optional - for two step authentication
                </small>

                {/* <!-- Newsletter --> */}
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="defaultRegisterFormNewsletter" />
                    <label className="custom-control-label" htmlFor="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
                </div>

                {/* <!-- Sign up button --> */}
                <button className="btn btn-info my-4 btn-block" type="submit">Sign up</button>


            </form>
        </div>
    )
}
