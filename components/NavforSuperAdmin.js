import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import 'bootstrap/dist/css/bootstrap.min.css';
function SuperNav(props) {
    console.log(props.cook);
    const router = useRouter();
    var name = (props.cook == undefined || props.cook == "") ? "" : props.cook
    // let queueUrl = `/queue/${props.cook}`;
    
    const logout = () => {
        Cookies.remove("user");
        router.replace('/login');
    }
    return (
        <div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossOrigin="anonymous"></script>
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.2/mdb.min.css"
                rel="stylesheet"
            />
            <nav className="navbar navbar-inverse navbar-expand-lg navbar-dark text-light bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand fs-3 text" href="/"><strong>QueueAutomation</strong></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbar-header" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            {props.cook == ""  ?
                                <li></li> :

                                <li className="nav-item">
                                    <a className="nav-link active" href='/superadmin'>Show all Queues</a>
                                    {/* <a className="nav-link active"  href={queueUrl}>Create Queue</a> */}
                                </li>
                            }
                            

                            <li className="nav-item">
                                {props.cook == "" ?
                                    <a className="nav-link active" href="/login">login</a> :
                                    <a className="nav-link active" href="/"></a>
                                    // {name.fname}
                                }
                            </li>
                            {props.cook == "" ?
                                <li></li> :
                                <li className="nav-item">
                                    <a className="nav-link active" onClick={logout}>LogOut</a>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );

}

export default SuperNav;

