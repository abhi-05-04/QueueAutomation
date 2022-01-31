import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from 'react'
export default function (props) {

    // const [num , setNum] = useState("");
    // const init = async () => {
    //     var index;
    //     for (index = 1; index < props.response.length; index++) {
    //         if(props.response[index]._id == props.userId)
    //         {
    //             setNum(index+1);
    //         }
    //     }
    // };

    // useEffect(() => {
    //     init();
    // }, []);

    // // useEffect(() => {
    // //     window.addEventListener('load', (event) => {
    // //         init();
    // //     });
    // // })


    console.log(props.num);
    try {
        return (

            <div style={{ margin: 30 }}>
                {
                        <div className="container card text-white bg-info mb-3" style={{ maxWidth: 250 }}>
                            <div className="card-header">Wait</div>
                            <div className="card-body">
                                <h5 className="card-title">Your number in Queue {props.num} </h5>
                                <p className="card-text">
                                    You have sucessfully added yourself to the Queue. Once your number
                                    will come we will notify you by message.But to live track Don't Exit
                                    From this Page otherwise you will not able track you live.
                                </p>
                            </div>
                        </div> 
                        // :
                        // <div className="container card text-white bg-info mb-3" style={{ maxWidth: 250 }}>
                        //     <div className="card-header">You are no more in Queue</div>
                        // </div>
                }
    
            </div>
        );
    } catch (error) {
        console.log(error);
        return (
            <div>you are not in queue</div>
        )
    }
}

export const getServerSideProps = async ({ req, res }) => {
    let url = req.url.split('/');

    let reqURL = "queue-mu.vercel.app/";
    for (let i = 1; i < url.length; i++)
        reqURL = reqURL + url[i] + '/';
    let adminId = url[url.length - 3];
    let userId = url[url.length - 1]


    let getList = await fetch(`https://queue-mu.vercel.app/api/getList?admin=${adminId}`);

    const response = await getList.json();
    // console.log(response.length);
    var num;
    // console.log(response);

    if (response.some(id => id._id === userId)) {
        for (var index = 1; index < response.length; index++) {
            if (response[index]._id == userId) {
                num = index + 1
            }
        }
    }
    console.log(adminId,num);

    // console.log(userId);
    // return { props: { response : response , userId: userId} }
    return { props: { num: num} }


}
