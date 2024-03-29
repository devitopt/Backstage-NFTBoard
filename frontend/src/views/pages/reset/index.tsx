import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Reset = () => {

    return (
        <main className='main'>
            <div className="authincation section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-4 col-md-5">
                            <div className="mini-logo text-center my-3">
                                <Link to="/">
                                    <img src="./images/logoi.png" alt="" />
                                </Link>
                                <h4 className="card-title mt-5">Reset Password</h4>
                            </div>
                            <div className="auth-form card">
                                <div className="card-body">
                                    <form className="row g-3">
                                        <div className="col-12">
                                            <label className="form-label">Email</label>
                                            <input type="email" className="form-control" placeholder="***********" />
                                        </div>
                                        <div className="text-center mt-4">
                                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3">
                                        <p>Don't get code?<a className="text-primary" href="./otp-1">Resend</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Reset;