import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='mt-4 border border-2 border-warning p-4 bg-dark text-white'>
            <h2 className='text-warning'>Terms & Conditions</h2>
            <ol>
                <li>You cannot withdraw from a course after 7 days of getting premium access.</li>
                <li>You have to pass every test to get a certification from us.</li>
                <li>You can ask for any help within the given office hour.</li>
            </ol>
            <button className='btn btn-warning'><Link className='text-decoration-none fw-semibold text-dark' to="/register">Back to Register</Link></button>
        </div>
    );
};

export default Terms;