
import Nav from '../../../components/Nav'
import React, { useState ,useEffect } from 'react'
import { useRouter } from 'next/router';
import { route } from 'next/dist/server/router';



export default function registration({props}) {
    const router = useRouter();

    const setDate = async()=>{
        const D = new Date();
        let d = D.getDate(); 
        // d = 16;
        console.log(date+"  "+d);
        if(d != props.date){
            console.log("confilct");
            Cookies.set("date",d,{expires:24/24});
            await fetch(`http://localhost:3000/api/deleteList`);
            console.log("deleted");
        }
    }

    useEffect(()=>{
        setDate();
    },[]);


    const [fname , setFname] = useState("");
    const [lname , setLname] = useState("");
    const [ph , setPh] = useState("");

    const handleClick = async (event)=>{
        event.preventDefault();
        try{
            await fetch(`http://localhost:3000/api/registerQ?fname=${fname}&lname=${lname}&phone=${ph}&admin=${props.admin}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            // alert
            // refresh page
            router.reload();
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div>
            <Nav />
            {/* <!-- Default form register --> */}
            <form className="text-center border border-light p-5" action="#!">

                <p className="h4 mb-4">Add yourself to virtual Queue</p>

                <div className="form-row mb-4">
                    <div className="col">
                        {/* <!-- First name --> */}
                        <input type="text" id="defaultRegisterFormFirstName" className="form-control" onChange={(e)=>{setFname(e.target.value)}} placeholder="First name" />
                    </div>
                    <br />
                    <div className="col">
                        {/* <!-- Last name --> */}
                        <input type="text" id="defaultRegisterFormLastName" className="form-control" onChange={(e)=>{setLname(e.target.value)}} placeholder="Last name" />
                    </div>
                </div>

                {/* <!-- Phone number --> */}
                <input type="text" id="defaultRegisterPhonePassword" className="form-control" onChange={(e)=>{setPh(e.target.value)}}  placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
                <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                    For sending updates about Queue
                </small>

                {/* <!-- Newsletter -->  */}
                <div>
                    <button className="btn btn-info my-4 btn-block" type="submit" onClick={handleClick}>Done</button>
                </div>

                {/* <!-- Sign up button --> */}

            </form>
        </div>
    );
}


registration.getInitialProps = (ctx)=>{
    console.log(ctx.query);
    let date = "";
    if(req.cookies.date  != undefined){
        date = req.cookies.date;
    }

    return {props : {admin : ctx.query.admin , date : date}};
}
