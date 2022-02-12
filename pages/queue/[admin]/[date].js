
import Nav from '../../../components/Nav'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { route } from 'next/dist/server/router';
import Cookies from 'js-cookie';



export default function registration({ date }) {
    const router = useRouter();
    // const {asPath} = useRouter();
    let adminL = router.asPath.split('/');
    adminL = adminL[adminL.length - 2];
    let dateL = date;
    console.log(dateL, adminL);


    const redir = (data) => {
        router.replace("/queue/" + adminL + "/" + dateL + "/" + data);
    }


    const setDate = async () => {
        dateL = date;
        adminL = adminL[adminL.length - 2];

        const D = new Date();
        let d = D.getDate();

        if (d != dateL) {
            console.log("confilct");
            Cookies.set("date", d, { expires: 24 / 24 });
            // await fetch(`/api/deleteList`);
            console.log("deleted");
        }
    }

    useEffect(() => {
        setDate();
    }, []);


    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [ph, setPh] = useState("");

    const handleClick = async (event) => {
        if (validate()) {
            event.preventDefault();
            try {
                await fetch(`/api/registerQ?fname=${fname}&lname=${lname}&phone=${ph}&admin=${adminL}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then(
                    async (data) => {
                        console.log(data);
                        await data.json()
                            .then(
                                (id) => {
                                    // alert("==>" + id);
                                    redir(id);
                                }
                            ).catch(
                                (err) => {
                                    console.log(err);
                                }
                            )

                    }
                ).catch(
                    (err) => {
                        console.log(err);
                    }
                )
                // alert
                // refresh page
                // router.reload();
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
        if (fname.search('^[A-Za-z]+$') === -1) {
            alert("First Name is not valid!")
            return;
        }
        if (lname === "")  {
            alert("Enter Last Name!")
            return;
        }
        if (lname.search('^[A-Za-z]+$') === -1) {
            alert("Last Name is not valid!")
            return;
        }
        if (ph === "") {
            alert("Enter mobile no!");
            return;
        }
        if (ph.length != 10) {
            alert("Enter correct mobile number!");
            return;
        }
        if (ph.search('^[0-9]+$') === -1) {
            alert("Enter Valid phone Number!")
            return;
        }
        return true;

    }

    return (
        <div>
            <form className="text-center border border-light p-5" action="#!">

                <p className="h4 mb-4">Add yourself to virtual Queue</p>

                <div className="form-row mb-4">
                    <div className="col">
                        <input type="text" id="defaultRegisterFormFirstName" className="form-control" onChange={(e) => { setFname(e.target.value) }} placeholder="First name" />
                    </div>
                    <br />
                    <div className="col">
                        <input type="text" id="defaultRegisterFormLastName" className="form-control" onChange={(e) => { setLname(e.target.value) }} placeholder="Last name" />
                    </div>
                </div>

                <input type="text" id="defaultRegisterPhonePassword" className="form-control" onChange={(e) => { setPh(e.target.value) }} placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
                <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                    For sending updates about Queue
                </small>

                <div>
                    <button className="btn btn-info my-4 btn-block" type="submit" onClick={handleClick}>Done</button>
                </div>


            </form>
        </div>
    );
}


registration.getInitialProps = ({ req, res }) => {


    let date = "";
    if (req.cookies.date != undefined) {
        date = req.cookies.date;
    }

    return { date: date };
}

