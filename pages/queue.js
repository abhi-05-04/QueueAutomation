import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/Nav'
import { useEffect } from 'react';

export default function Queue({ cno, cList,userInfo ,date }) {

    // let items = [];
    // for (let i = 0; i < cno; i++) {
    //     // console.log(cList[i]);
    //     items.push({
    //         header: ``,
    //         // description: ``,
    //         description: (
    //             <div className="d-inline-block px-md-5">
    //                 <input className="form-check-input" type="checkbox" id="inlineCheckbox1" onClick={() => { inc(i) }} value="option1" />
    //                 <label className="form-check-label" htmlFor="inlineCheckbox"></label>
    //             </div>
    //         ),
    //         fluid: true

    //     });
    // }

    const setDate = async()=>{
        const D = new Date();
        let d = D.getDate(); 
        // d = 16;
        console.log(date+"  "+d);
        if(d != date){
            console.log("confilct");
            Cookies.set("date",d,{expires:24/24});
            await fetch(`/api/deleteList`);
            console.log("deleted");
        }
    }
    useEffect(()=>{
        setDate();

    },[]);
    return (
        <div>
            <Nav cook={userInfo} /> 
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="/Images/qr.png" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div>
                            {/* <Card.Group items={items} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    Queue.getInitialProps = async () => {

        return { cno, cList };
    }
}

export const getServerSideProps = async ({ req, res }) => {
    let cook = req.cookies.user;
    // console.log("hello"+req.cookies.user);
    let  date = "";
  
    if(req.cookies.date  != undefined){
        date = req.cookies.date;
    }
    if (cook == undefined) {
        return { props: { userInfo: "" , date : date } }
    }
    else {
        return { props: { userInfo: cook, cook: cook ,  date : date  } }
    }



}
