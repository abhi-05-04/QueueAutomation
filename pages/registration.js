import React , {useState , useEffect} from 'react'
import Nav from '../components/Nav'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

export default function registration({token}) {


    const router = useRouter();


    const [fname , setFname] = useState("");
    const [lname , setLname] = useState("");
    const [ph , setPh] = useState("");

    const redir = ()=>{
        router.replace('/');
    }
    useEffect(()=>{
        if(token == "") 
            redir();
    },[]);



    const handleClick = async()=>{
        event.preventDefault();
        try{
            await fetch(`http://localhost:3000/api/registerQ?fname=${fname}&lname=${lname}&phone=${ph}&admin=${token}`,{
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
                        <input type="text" id="defaultRegisterFormFirstName" onChange={(e)=>{setFname(e.target.value)}} className="form-control" placeholder="First name" />
                    </div>
                    <br />
                    <div className="col">
                        {/* <!-- Last name --> */}
                        <input type="text" id="defaultRegisterFormLastName" onChange={(e)=>{setLname(e.target.value)}} className="form-control" placeholder="Last name" />
                    </div>
                </div>

                {/* <!-- Phone number --> */}
                <input type="text" id="defaultRegisterPhonePassword" className="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
                <small id="defaultRegisterFormPhoneHelpBlock" onChange={(e)=>{setPh(e.target.value)}} className="form-text text-muted mb-4">
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



export function getServerSideProps({ req , res }){
    if(req.cookies.user != undefined){
        return { props : { token : req.cookies.user } };
    }
    return { props : {token : ""} };
}