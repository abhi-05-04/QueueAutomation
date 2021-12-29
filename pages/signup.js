import React from 'react'
import Nav from '../components/Nav'

export default function signup() {
    return (
        <div>
            <Nav/>
            <form className="text-center border border-light p-5" action="#!" >
            
                <p className="h4 mb-4">Sign up</p>

                <div className="form-row mb-4">
                    <div className="col">
                        <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="First name" />
                    </div>
                    <br />
                    <div className="col">
                        <input type="text" id="defaultRegisterFormLastName" className="form-control" placeholder="Last name" />
                    </div>
                </div>

                <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="E-mail" />

                <input type="password" id="defaultRegisterFormPassword" className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" />
                <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                    At least 8 characters and 1 digit
                </small>

                <input type="text" id="defaultRegisterPhonePassword" className="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
                <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                    Optional - for two step authentication
                </small>

                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="defaultRegisterFormNewsletter" />
                    <label className="custom-control-label" htmlFor="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
                </div>

                <button className="btn btn-info my-4 btn-block" type="submit">Sign up</button>


            </form>
        </div>
    )
}
