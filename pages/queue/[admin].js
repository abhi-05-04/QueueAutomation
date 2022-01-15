import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../../components/Nav'
import { useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
// import { Card } from 'reactstrap';
import { Card  ,Button,Grid } from 'semantic-ui-react'
import QRCode from 'qrcode.react';


export default function Queue({ admin , cook , list ,userInfo, reqURL}) {

    const router = useRouter();

    
    // console.log(list);

    const redir = ()=>{
        router.replace('/');
    }


    const sendMessage = async () => {
      
        const res = await fetch('/api/sendMessage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ phone: list[1].phone, message: 'Be ready you are next' }),
        });
        const apiResponse = await res.json();
        console.log(apiResponse);
        
      };




    useEffect(async()=>{
        console.log(list.length)
        if(list.length >= 2)
            sendMessage();
        // const res = await fetch(`/api/sendMessage`);
        // console.log(res);
        if(admin !=cook)
            redir();
    },[]) 

    let items = [];
    for (let i = 0; i < list.length; i++) {
        // console.log(cList[i]);
        items.push({
            header: `${i+1}. ${list[i].fname} ${list[i].lname}`,
            meta: `${list[i].phone}`,
            description: (

                <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green' style={{margin:3}}>
                    Approve
                    </Button>
                    <Button basic color='red'  style={{margin:3}}>
                    Decline
                </Button>
                </div>
            </Card.Content>
            
            ),
            fluid: true

        });
    }

    const downloadQRCode = ()=>{
        const as=document.querySelectorAll("#qrcodeEl")[0];
        const qrCodeURL =as
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        console.log("qrcode=="+qrCodeURL)
        let aEl = document.createElement("a");
        aEl.href = qrCodeURL;
        aEl.download = "QR_Code.png";
        document.body.appendChild(aEl);
        aEl.click();
        document.body.removeChild(aEl);
    }

    return (
        <div>
            <Nav cook={userInfo} />

            <div className="card mb-3 container">
                <div className="row g-0">
                {/* <Grid celled> */}
                {/* <Grid.Row>
                <Grid.Column width={9}>
                    <div className="col-md-10">
                        <img src="/Images/qr.png" className="img-fluid rounded-start" alt="..."/>
                    </div>
                </Grid.Column>
                <Grid.Column width={7}>
                <div className="col-md-8">
                    <div>
                        <Card.Group items={items} />
                    </div>
                    </div>
                </Grid.Column>
                </Grid.Row>
                 */}
            {/* </Grid>  */}
                    <div className="col-md-6">
                        
                        <QRCode
                            className="img-fluid rounded-start" 
                            alt="..."
                            id="qrcodeEl"
                            size={450}
                            style={{padding:"5%"}}
                            value={reqURL}
                        />
                        <Button content='Download' onClick={downloadQRCode} primary/>
                    </div>
                    <div className="col-md-4">
                    <div style={{marginTop:2}} >
                        <Card.Group items={items} />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async({req,res})=>{
        // console.log(req.url);
        let date = new Date();
        // console.log(date.getDate());
        let url = req.url.split('/');

        let reqURL = "localhost:3000/";
        for(let i=1;i<url.length;i++)
            reqURL = reqURL + url[i] + '/';
        reqURL = reqURL + date.getDate();
        let adminId = url[url.length-1];
        var name = req.cookies.user;
        var cook1 = req.cookies.user == undefined?"":JSON.parse(name);
        var cook = cook1._id;
        let getList = await fetch(`http://localhost:3000/api/getList?admin=${adminId}`);
            
        const response = await getList.json();
        
        return {props : {admin :  adminId , cook : cook ,userInfo: name, list : response,reqURL:reqURL}}

}

