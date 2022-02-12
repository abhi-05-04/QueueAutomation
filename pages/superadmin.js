import React, { useState, useEffect } from "react";
import SuperNav from "../components/NavforSuperAdmin";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import About from "../components/about";
import { Card, Button, Grid } from "semantic-ui-react";



export default function login({ token, date }) {
    const [items, setItems] = useState([]);
    const [queueItems, setQueueItems] = useState([]);
    // const [queueMap, setQueueMap] = useState([])
    const router = useRouter();
    console.log(process.env.SUPERADMIN);
    let adminList = [],
        queueOfAdmin = [];

    let map1 = new Map();

    const init = async () => {
        console.log(token.toString());
        if (token != "61ebb855231640c1d2f54c76") {
            router.replace("/");
        }
        try {
            await fetch(`/api/getAdminList`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(async (result) => {
                    await result
                        .json()
                        .then((x) => {
                            adminList = x;

                            let items = [];
                            var k = 0;
                            for (let i = 0; i < adminList.length; i++, k++) {
                                // console.log(adminList);
                                if (adminList[i]._id == '61ebb855231640c1d2f54c76') {
                                    k--;
                                } else {
                                    items.push({
                                        header: `${k + 1}. ${adminList[i].fname} ${adminList[i].lname
                                            }`,
                                        meta: `${adminList[i].number}`,
                                        description: (
                                            <Card.Content extra>
                                                <Button basic color='black' onClick={() => getQueue(adminList[i]._id)} style={{ margin: 3 }}>
                                                    Show Queue
                                                </Button>
                                            </Card.Content>
                                        ),
                                        fluid: true
                                    });
                                }
                            }
                            // console.log("=>"+items[0].id);
                            // getQueue(items[0].id);className
                            setItems(items);
                            // console.log('======>'+items);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                })
                .then((err) => {
                    console.log(err);
                });
        } catch (err) {
            console.log(err);
        }

        for (let i = 0; i < adminList.length; i++) {
            // console.log(adminList[i]._id);
            let ithList = [];

            try {
                await fetch(
                    `/api/getList?admin=${adminList[i]._id}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
                    .then(async (result) => {
                        await result
                            .json()
                            .then((x) => {
                                queueOfAdmin.push(x);
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    })
                    .then((err) => {
                        console.log(err);
                    });
            } catch (err) {
                console.log(err);
            }
        }
        // let map1 = new Map();
        var ind = 10000;
        for (let i = 0; i < adminList.length; i++) {
            console.log(adminList[i]);
            console.log(queueOfAdmin[i]);
            if (queueOfAdmin[i].length > 0){
                map1[adminList[i]._id] = queueOfAdmin[i];
                ind = ind > i?i:ind;
            }
        }
        // getQueue(adminList[ind]._id);

    };

    const getQueue = async (id) => {
        let items = [];
        var k = 0;
        let queueList = map1[id];
        if (queueList == undefined) {
            var x = 0;
            alert("No queue avaible for this admin!");
        }
        else {
            console.log(">" + queueList.length);
            for (let i = 0; i < queueList.length; i++, k++) {

                items.push({
                    header: `${k + 1}. ${queueList[i].fname} ${queueList[i].lname
                        }`,
                    meta: `${queueList[i].phone}`,
                    // description: <Card.Content extra></Card.Content>,
                    fluid: true,
                });

            }
            setQueueItems(items);
        }


    }
    useEffect(() => {
        init();
    }, []);

    return (
        <div>
            <SuperNav cook={token} />
            <div className="card mb-3 container" style={{ padding:5 , margin: 10 }}>
                <div className="row g-0">
                    <div className="col-md-6" style={{ padding: 10,  }} >
                        <div className="h3">Admins</div>
                        <div style={{ marginTop: 2 }}>
                            <Card.Group items={items} />
                        </div>
                    </div>
                    <div className="col-md-6" style={{ padding: 10 }}>
                        <div className="h3">Students</div>
                        <div style={{ marginTop: 2 }} >
                            <Card.Group items={queueItems} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function getServerSideProps({ req, res }) {
    let token = "",
        date = "";
    if (req.cookies.user != undefined) {
        token = req.cookies.user;
    }
    if (req.cookies.date != undefined) {
        date = req.cookies.date;
    }
    return { props: { token: token, date: date } };
}

// export const getServerSideProps = async({req,res})=>{
//     // console.log(req.url);
//     let date = new Date();
//     // console.log(date.getDate());
//     let url = req.url.split('/');

//     let reqURL = "queue-mu.vercel.app/";
//     for(let i=1;i<url.length;i++)
//         reqURL = reqURL + url[i] + '/';
//     reqURL = reqURL + date.getDate();
//     let adminId = url[url.length-1];
//     let cook = req.cookies.user;

//     let getList = await fetch(`https://queue-mu.vercel.app/api/getList?admin=${adminId}`);

//     const response = await getList.json();
//     let d = "";
//     if(req.cookies.date  != undefined){
//         d = req.cookies.date;
//     }

//     return {props : {admin :  adminId , cook : cook , list : response,reqURL:reqURL , date : d}}

// }
