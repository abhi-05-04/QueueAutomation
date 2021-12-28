import React from 'react'
import Nav from '../components/Nav'

export default function registration() {
    return (
        <div>
            <Nav />
            {/* <!-- Default form register --> */}
            <form className="text-center border border-light p-5" action="#!">

                <p className="h4 mb-4">Add yourself to virtual Queue</p>

                <div className="form-row mb-4">
                    <div className="col">
                        {/* <!-- First name --> */}
                        <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="First name" />
                    </div>
                    <br />
                    <div className="col">
                        {/* <!-- Last name --> */}
                        <input type="text" id="defaultRegisterFormLastName" className="form-control" placeholder="Last name" />
                    </div>
                </div>

                {/* <!-- Phone number --> */}
                <input type="text" id="defaultRegisterPhonePassword" className="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
                <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                    For sending updates about Queue
                </small>

                {/* <!-- Newsletter -->  */}
                <div>
                    <button className="btn btn-info my-4 btn-block" type="submit">Done</button>
                </div>

                {/* <!-- Sign up button --> */}

            </form>
        </div>
    );
}
