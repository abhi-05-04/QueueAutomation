import React from 'react'
import Nav from '../components/Nav'
import { useState } from 'react'
import { useRouter } from 'next/router';
import Cookies from "js-cookie";
import { useEffect } from 'react';


export default function signup({ token, date }) {
    const router = useRouter();

    const setDate = async () => {
        const D = new Date();
        let d = D.getDate();
        // d = 16;
        console.log(date + "  " + d);
        if (d != date) {
            console.log("confilct");
            Cookies.set("date", d, { expires: 24 / 24 });
            await fetch(`https://queue-mu.vercel.app/api/deleteList`);
            console.log("deleted");
        }
    }


    var token1 = (token == undefined || token == "") ? {} : JSON.parse(token);
    token1 = token1._id;

    const redir = () => {
        router.replace('/');
    }
    useEffect(() => {
        setDate();
        if (token != "")
            redir();
    }, []);


    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [num, setNum] = useState("");

    const handleFname = (event) => {
        setFname(event.target.value);
    }
    const handleLname = (event) => {
        setLname(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePass = (event) => {
        setPass(event.target.value);
    }

    const handleNum = (event) => {
        setNum(event.target.value);
    }

    const register = async (event) => {
        event.preventDefault();
        if (validate()) {
            try {
                await fetch(`https://queue-mu.vercel.app/api/newAdmin?fname=${fname}&lname=${lname}&email=${email}&password=${pass}&number=${num}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(async (result) => {
                        await result.json()
                            .then((x) => {
                                console.log(x);

                                let str = toString(x);
                                Cookies.set("user", x, { expires: 1 / 24 });
                                router.replace('/');
                            })
                            .catch((err) => {
                                console.log(err);
                            })
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
            catch (err) {
                console.log(err);
                alert("Failed to signin!")
            }
        }

    }

    const validate = () => {
        if (fname === "") {
            alert("Enter First Name!")
            return;
        }
        if (lname === "") {
            alert("Enter Last Name!")
            return;
        }
        if (email === "") {
            alert("Enter Email!");
            return;
        }
        if (!String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            alert("Enter Valid Email!");
            return;
        }
        if(pass === "")
        {
            alert("Enter password!");
            return;
        }
        if(pass.length<6)
        {
            alert("password too short!");
            return;
        }
        if(num === "")
        {
            alert("Enter Phone Number!");
            return;
        }
        if(num.length!=10)
        {
            alert("Enter Valid phone Number!");
            return;
        }
        return true;

    }


    return (
        <div>
            <Nav cook={token} />
            <form className="text-center border border-light p-5" method='POST'
            /*onSubmit={register}*/ >

                <p className="h4 mb-4">Sign up</p>

                <div className="form-row mb-4">
                    <div className="col">

                        <input type="text" id="defaultRegisterFormFirstName" onChange={handleFname} className="form-control" placeholder="First name" />
                    </div>
                    <br />
                    <div className="col">

                        <input type="text" id="defaultRegisterFormLastName" onChange={handleLname} className="form-control" placeholder="Last name" />
                    </div>
                </div>

                <input type="email" id="defaultRegisterFormEmail" onChange={handleEmail} className="form-control mb-4" placeholder="E-mail" />

                <input type="password" id="defaultRegisterFormPassword" onChange={handlePass} className="form-control" aria-label='At least 8 characters and 1 digit' placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" />
                <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                    At least 6 characters
                </small>

                <br />
                <input type="text" id="defaultRegisterPhonePassword" onChange={handleNum} className="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
                {/* <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                    Optional - for two step authentication
                </small> */}

                {/* <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="defaultRegisterFormNewsletter" />
                    <label className="custom-control-label" htmlFor="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
                </div> */}

                <button className="btn btn-info my-4 btn-block" type="button"
                    onClick={register}
                >Sign up</button>


            </form>
        </div>
    )
}


export function getServerSideProps({ req, res }) {
    let date = "";

    if (req.cookies.date != undefined) {
        date = req.cookies.date;
    }
    if (req.cookies.user != undefined) {
        return { props: { token: req.cookies.user, date: date } };
    }
    return { props: { token: "", date: date } };
}