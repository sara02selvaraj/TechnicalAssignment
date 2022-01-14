import React from 'react';
import {Link} from 'react-router-dom';

let Navbar = () => {
    return (
        <React.Fragment>
            <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
                <div className='container'>
                    <Link to="/" className='navbar-brand'>
                        <i class="fa fa-globe" aria-hidden="true"/>
                    </Link> 
                    <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>Resources</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>Services</Link>
                            </li>
                        </ul>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <Link to='/register' className='nav-link'>Register</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/login' className='nav-link'>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
};
export default Navbar;