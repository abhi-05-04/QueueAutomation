import React from 'react'

export default function Footer() {
    return (
        <div>
            {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
            <link rel="stylesheet" href="node_modules/mdbootstrap/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="node_modules/mdbootstrap/css/mdb.min.css"/>
            <link rel="stylesheet" href="node_modules/mdbootstrap/css/style.css"></link>
            <script type="text/javascript" src="node_modules/mdbootstrap/js/jquery.min.js"></script>
            <script type="text/javascript" src="node_modules/mdbootstrap/js/popper.min.js"></script>
            <script type="text/javascript" src="node_modules/mdbootstrap/js/bootstrap.min.js"></script>
            <script type="text/javascript" src="node_modules/mdbootstrap/js/mdb.min.js"></script> */}
            {/* <!-- Footer --> */}
            <footer className="page-footer font-small blue pt-4 bg-info">

                {/* <!-- Footer Links --> */}
                <div className="container-fluid text-center text-md-left">

                    {/* <!-- Grid row --> */}
                    <div className="row">

                        {/* <!-- Grid column --> */}
                        <div className="col-md-6 mt-md-0 mt-3">

                            {/* <!-- Content --> */}
                            <h5 className="text-uppercase">Footer Content</h5>
                            <p>Here you can use rows and columns to organize your footer content.</p>

                        </div>
                        {/* <!-- Grid column --> */}

                        <hr className="clearfix w-100 d-md-none pb-3"/>

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 mb-md-0 mb-3">

                                {/* <!-- Links --> */}
                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 4</a>
                                    </li>
                                </ul>

                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 mb-md-0 mb-3">

                                {/* <!-- Links --> */}
                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 4</a>
                                    </li>
                                </ul>

                            </div>
                            {/* <!-- Grid column --> */}

                    </div>
                    {/* <!-- Grid row --> */}

                </div>
                {/* <!-- Footer Links --> */}

                {/* <!-- Copyright --> */}
                <div className="footer-copyright text-center py-3">
                <hr />
                    <a href="http://www.walchandsangli.ac.in/" target='_blank'>Walchand College of Engneering, Sangli.</a>
                </div>
                {/* <!-- Copyright --> */}

            </footer>
            {/* <!-- Footer --> */}
        </div>
    )
}
