import React from 'react'
import Nav from '../components/Nav'

export default function login() {
    return (
        <div>
            <Nav />
            {/* <!-- Default form login --> */}
            <form className="text-center border border-light p-5" action="#!">

                <p className="h4 mb-4">Sign in</p>

                {/* <!-- Email --> */}
                <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" />

                {/* <!-- Password --> */}
                <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" />

                {/* <div className="d-flex justify-content-around"> */}
                    <div>
                        {/* <!-- Remember me --> */}
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                            <label className="custom-control-label" htmlFor="defaultLoginFormRemember">Remember me</label>
                        </div>
                    </div>
                    <div>
                        {/* <!-- Forgot password --> */}
                        <a href="">Forgot password?</a>
                    </div>
                {/* </div> */}

                {/* <!-- Sign in button --> */}
                <div>
                    <button className="btn btn-info btn-block my-4" type="submit">Sign in</button>
                </div>
                {/* <!-- Register --> */}
                <p>Not a member?
                    <a href="/signup">Register</a>
                </p>

                {/* <!-- Social login --> */}
            </form>
            {/* <!-- Default form login --> */}
        </div>
    )
}
