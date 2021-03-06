import React from 'react';
import {Link} from 'react-router-dom'

let Home = () => {
    return (
        <React.Fragment>
            <div className='landing-page'>
                <div className='wrapper'>
                    <div className='d-flex flex-column align-items-center justify-content-center text-center h-100'>
                        <h1>Employees Record</h1>
                        <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptates?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt at perspiciatis voluptates accusamus sequi, veniam maiores eum! Repellat iusto nemo sit, mollitia quas modi nam temporibus, libero neque, necessitatibus quasi!</p>
                        <Link className="btn btn-primary btn-sm" to="/employees">View Record</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home