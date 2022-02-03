import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const styling = {
    backgroundImage: "url('/Images/HomePage/bg.jpg')",
    // margin: "50px 0px",
    // backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
}

export default function About() {
    return (
        <div >
            <div id="home" className="blue-theme feature-single-body" >
                <section className="space-50 " style={styling} >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img
                                    src="/Images/HomePage/qr.png"
                                    alt="queue waiting system"
                                />
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <h2 className="title1 text-light">
                                    Virtual Queue System to make it efficient than traditional Queue Method
                                </h2>
                                <p className="text-light">
                                    
                                    Students being occupied with their studies and class schedules
                                    often find it challenging to waste time waiting in a queue
                                    outside administrative offices, libraries, cafeterias, or fee
                                    departments. Our smart system provides students the
                                    versatility and comfort to obtain these services without any
                                    trouble. Qwaiting is a specially designed system for the
                                    educational sector that gives students and the staff the
                                    ability to manage all the activities smoothly.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="space-100  light-blue">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 text-right col-sm-push-6">
                                <span>
                                    <img src="/Images/HomePage/Automation.png" alt="Automation" />
                                </span>
                            </div>
                            <div className="col-sm-6 text-left col-sm-pull-6">
                                <div className="clearfix">
                                    <h3 className="title11">
                                        How QueueAutomation Works?
                                    </h3>
                                </div>
                                <ul className="checkmark-list">
                                    <li>
                                        Students can join the queue using their phones through QR scan.
                                    </li>
                                    <li>
                                        A webpage will be generated highlighting all the required
                                        parameters(Name, Mobile Number). He/She need fill and submit it. 
                                    </li>
                                    <li>
                                        After that he/she will get redirected to new page where they can see their 
                                        queue no. and students waiting ahead of them. Queue Status can be
                                        tracked on a real-time basis.
                                    </li>
                                    <li>
                                        They will receive a reminder notification once they are next
                                        in line to be served.{" "}
                                    </li>
                                    <li>Service is delivered safely and comfortably. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-100">
                    <div className="container">
                        <div className="flex-row space-80 justify-content-between">
                            <div className="col-md-8">
                                <div className="pre-title">Features Highlights</div>
                                <h2 className="custom-title gray-text mt-0">
                                    How will QueueAutomation benefit the students and staff members?
                                </h2>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                        <div className="flex-row space-80">
                            <div className="col-md-6 mb-4">
                                <div className="flex align-items-center   ">
                                    <div className="icon-box-rounded">
                                        <img src="/Images/HomePage/better.svg" alt="better" />
                                    </div>
                                    <div className="content-col mb-0">
                                        <div className="sub_title_small gray-text">
                                            Better administration
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-md-6 mb-4">
                                <div className="flex align-items-center  ">
                                    <div className="icon-box-rounded">
                                        <img src="/Images/HomePage/time.svg" alt="time" />
                                    </div>
                                    <div className="content-col mb-0">
                                        <div className="sub_title_small gray-text">
                                            Reduce waiting time
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-md-6 mb-4">
                                <div className="flex align-items-center  ">
                                    <div className="icon-box-rounded">
                                        <img
                                            src="/Images/HomePage/instruction.svg"
                                            alt="instruction"
                                        />
                                    </div>
                                    <div className="content-col mb-0">
                                        <div className="sub_title_small gray-text">
                                            Clear instructions{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-md-6 mb-4">
                                <div className="flex align-items-center  ">
                                    <div className="icon-box-rounded">
                                        <img src="/Images/HomePage/social.svg" alt="social" />
                                    </div>
                                    <div className="content-col mb-0">
                                        <div className="sub_title_small gray-text">
                                            Social distancing Protocols will be implemented
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-md-6 mb-4">
                                <div className="flex align-items-center  ">
                                    <div className="icon-box-rounded">
                                        <img
                                            src="/Images/HomePage/customer-feedback.svg"
                                            alt="feedback"
                                        />
                                    </div>
                                    <div className="content-col mb-0">
                                        <div className="sub_title_small gray-text">
                                            Improve staff productivity &amp; Performance
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-md-6 mb-4">
                                <div className="flex align-items-center  ">
                                    <div className="icon-box-rounded">
                                        <img src="/Images/HomePage/maintain.svg" alt="maintain" />
                                    </div>
                                    <div className="content-col mb-0">
                                        <div className="sub_title_small gray-text">
                                            Improves Brand Perception
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}
                        </div>

                        <div className="">
                            <div className="clearfix">
                                <h3 className="text-center title1 pb-5">How It Works</h3>
                            </div>
                            <div className="flex-row justify-content-center text-center">
                                <div className="col-md-4 mb-4">
                                    <div className="image-step">
                                        <img src="/Images/HomePage/step-1.png" alt="step 1" />
                                    </div>
                                    <div className="counter">1</div>
                                    <p className="step-text">Student will scan the QR Code and fill the Details .</p>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="image-step">
                                        <img src="/Images/HomePage/step-2.png" alt="step 2" />
                                    </div>
                                    <div className="counter">2</div>
                                    <p className="step-text">
                                        He/She is able to track the exact number in the virtual Queue.
                                    </p>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="image-step">
                                        <img src="/Images/HomePage/step-3.png" alt="step 3" />
                                    </div>
                                    <div className="counter">3</div>
                                    <p className="step-text">
                                        A notification alert will be sent to them when their turn is
                                        next. They will arrive right on time to be served
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
