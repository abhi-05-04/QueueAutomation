import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../../components/Nav'
import { useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css'
// import { Card } from 'reactstrap';
import { Card  ,Button,Grid } from 'semantic-ui-react'

export default function Queue({ props}) {
    console.log(props.list);
    
    let items = [];
    for (let i = 0; i < props.list.length; i++) {
        // console.log(cList[i]);
        items.push({
            header: `${i+1}. ${props.list[i].fname} ${props.list[i].lname}`,
            meta: `${props.list[i].phone}`,
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
    return (
        <div>
            <Nav/>
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
                        <img src="/Images/qr.png" className="img-fluid rounded-start" alt="..."/>
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

Queue.getInitialProps = async(ctx)=>{
    // console.log(ctx.query);
    

    // try{
        let getList = await fetch(`http://localhost:3000/api/getList?admin=${ctx.query.admin}`);
        
        const response = await getList.json();
        return {props : {list : response}};
    //     .then((response)=>{
    //         console.log(response);
    //         // console.log(getList);
    //         return {props : { list : response }};
    //     })
    //     .catch((err)=>{ 
    //         console.log(err);
    //         return {props : {list : ""}};
    //     })
    // }
    // catch(e){
    //     console.log(e);
    //     return {props : {list : ""}};
    // }
}



{/* 
    <Grid celled>
                <Grid.Row>
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
                
            </Grid> 
        */}