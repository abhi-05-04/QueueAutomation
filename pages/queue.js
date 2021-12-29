import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/Nav'

export default function Queue({ cno, cList }) {

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
    return (
        <div>
            <Nav/>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="/Images/qr.png" className="img-fluid rounded-start" alt="..."/>
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
