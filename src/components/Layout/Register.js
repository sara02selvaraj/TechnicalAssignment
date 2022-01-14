import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";

let Register = () => {
    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 m-auto">
                            <div className="card">
                                <div className="card-header bg-dark text-white text-center">
                                    <p className="h3">Register Here</p>
                                </div>
                                <div className="card-body bg-light">
                                    <form>
                                    <div className="form-group">
                                            <input
                                                name="name"
                                                type="text" className='form-control' placeholder="Full Name"/>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                name="email"
                                                type="email" className='form-control' placeholder="Email"/>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                name="password"
                                                type="password" className='form-control' placeholder="Password"/>
                                        </div>
                                        <div>
                                            <Link to='/employees' className="btn btn-primary btn-sm">Register</Link>
                                        </div>
                                        <small>
                                            Don't have an Account ? <Link to="/login" className="font-weight-bold text-teal">Login</Link>
                                        </small>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default Register;