import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

export default function registration({ token, date }) {


    const router = useRouter();


    const setDate = async () => {
        const D = new Date();
        let d = D.getDate();
        // d = 16;
        // console.log(date+"  "+d);
        if (d != date) {
            console.log("confilct");
            Cookies.set("date", d, { expires: 24 / 24 });
            await fetch(`https://queue-mu.vercel.app//api/deleteList`);
            console.log("deleted");
        }
    }


    var token1 = (token == undefined || token == "") ? {} : token;
    token1 = token1._id;

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [ph, setPh] = useState("");

    const redir = () => {
        router.replace('/');
    }
    useEffect(() => {
        // console.log(token);
        setDate();
        if (token1 == "")
            redir();
    }, []);



    const handleClick = async (event) => {
        if (validate()) {
            event.preventDefault();
            try {
                console.log(fname);
                await fetch(`https://queue-mu.vercel.app//api/registerQ?fname=${fname}&lname=${lname}&phone=${ph}&admin=${token}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                // alert
                // refresh page
                router.reload();
            }
            catch (err) {
                console.log(err);
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
        return true;

    }
    return (
        <div>
            <Nav cook={token} />
            {/* <!-- Default form register --> */}
            <form className="text-center border border-light p-5" >

                <p className="h4 mb-4">Add yourself to virtual Queue</p>

                <div className="form-row mb-4">
                    <div className="col">
                        {/* <!-- First name --> */}
                        <input type="text" id="defaultRegisterFormFirstName" onChange={(e) => { setFname(e.target.value); }} className="form-control" placeholder="First name" />
                    </div>
                    <br />
                    <div className="col">
                        {/* <!-- Last name --> */}
                        <input type="text" id="defaultRegisterFormLastName" onChange={(e) => { setLname(e.target.value) }} className="form-control" placeholder="Last name" />
                    </div>
                </div>

                {/* <!-- Phone number --> */}
                <input type="text" id="defaultRegisterPhonePassword" onChange={(e) => { setPh(e.target.value); }} className="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
                <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                    For sending updates about Queue
                </small>

                {/* <!-- Newsletter -->  */}
                <div>
                    <button className="btn btn-info my-4 btn-block" type="submit" onClick={handleClick} >Done</button>
                </div>

                {/* <!-- Sign up button --> */}

            </form>
        </div>
    );
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