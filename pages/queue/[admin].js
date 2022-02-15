import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../../components/Nav'
import { useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

// import { Card } from 'reactstrap';
import { Card, Button, Grid } from 'semantic-ui-react'
import QRCode from 'qrcode.react';


export default function Queue({ admin, cook, list, reqURL, date }) {

    const router = useRouter();
    const deleteobj= async (id) => {
        try {
            await fetch(`/api/deleteObj?id=${id}`);
            window.location.reload()
        } catch (error) {
        }
    }


    const setDate = async () => {
        const D = new Date();
        let d = D.getDate();
        // d = 16;
        console.log(date + "  " + d);
        if (d != date) {
            console.log("confilct");
            Cookies.set("date", d, { expires: 24 / 24 });
            // await fetch(`/api/deleteList`);
            console.log("deleted");
        }
    }
    

    const redir = () => {
        router.replace('/');
    }


    const sendMessage = async () => {

        const res = await fetch(`/api/sendMessage`  , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phone: list[2].phone, message: 'Be ready you are next' }),
        });
        const apiResponse = await res.json();
        console.log(apiResponse);

    };




    useEffect(async () => {
        console.log(list.length)
        setDate();
        if (list.length >= 3)
            sendMessage();
        // const res = await fetch(`/api/sendMessage`);
        // console.log(res);
        if (admin != cook)
            redir();
    }, [])

    let items = [];
    for (let i = 0; i < list.length; i++) {
        // console.log(cList[i]);
        items.push({
            header: `${i + 1}. ${list[i].fname} ${list[i].lname}`,
            meta: `${list[i].phone}`,
            description: (

                <Card.Content extra>
                    <div className='buttons'>
                        <Button basic color='green' onClick={() => deleteobj(list[i]._id)} style={{ margin: 3 }}>
                            Next
                        </Button>
                        {/* <Button basic color='red' onClick={() => deleteobj(list[i]._id)} style={{ margin: 3 }}>
                            Decline
                        </Button> */}
                    </div>
                </Card.Content>

            ),
            fluid: true

        });
    }

    const downloadQRCode = () => {
        const as = document.querySelectorAll("#qrcodeEl")[0];
        const qrCodeURL = as
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        console.log("qrcode==" + qrCodeURL)
        let aEl = document.createElement("a");
        aEl.href = qrCodeURL;
        aEl.download = "QR_Code.png";
        document.body.appendChild(aEl);
        aEl.click();
        document.body.removeChild(aEl);
    }

    return (
        <div>
            <Nav />

            <div className="card mb-3 container">
                <div className="row g-0">
                    
                    <div className="col-md-6">

                        <QRCode
                            className="img-fluid rounded-start"
                            alt="..."
                            id="qrcodeEl"
                            size={450}
                            style={{ padding: "5%" }}
                            value={reqURL}
                        />
                        <Button content='Download' onClick={downloadQRCode} primary />
                        <Button content='Delete List' 
                            
                            onClick={async() => {
                                if(confirm("This Admin will be permanatly deleted !"))
                                {
                                    await fetch(`/api/deleteList?admin=${admin}`);
                                    window.location.reload()
                                }
                            }} 
                            negative 
                            />
                    </div>
                    <div className="col-md-4">
                        <div style={{ marginTop: 2 }} >
                            <Card.Group items={items} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ req, res }) => {
    // console.log(req.url);
    let date = new Date();
    // console.log(date.getDate());
    let url = req.url.split('/');

    let reqURL = `${process.env.DOMAIN}/`;
    for (let i = 1; i < url.length; i++)
        reqURL = reqURL + url[i] + '/';
    reqURL = reqURL + date.getDate();
    let adminId = url[url.length - 1];
    let cook = req.cookies.user;


    let getList = await fetch(`${process.env.DOMAIN}/api/getList?admin=${adminId}`);

    const response = await getList.json();
    let d = "";
    if (req.cookies.date != undefined) {
        d = req.cookies.date;
    }

    return { props: { admin: adminId, cook: cook, list: response, reqURL: reqURL, date: d } }

}

