import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='d-flex align-items-center justify-content-center min-vh-100 bg-dark bg-gradient'>
            <div className='text-center text-white border border-2 border-warning rounded p-2 m-4'>
                <h1>404: Page Not Found</h1>
                <p>The route you've provided doesn't match with any valid router in the database.</p>
                <Link to="/">
                    <Button className='fw-semibold' variant="warning">Back to Home</Button>
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;