import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Premium = () => {

    const course = useLoaderData();
    // console.log(course);

    return (
        <div className='w-75 mx-auto text-center mt-4 border border-2 border-warning p-4 bg-dark text-white rounded'>
            <h2 className='mb-4'>Congratulations! <br /> You've Got Premium Access to this course: <span className='text-warning text-decoration-underline'>{course.title}</span></h2>
            <Button variant='warning'><Link className='mx-1 text-decoration-none fw-semibold text-dark' to="/">Back to Courses</Link></Button>
        </div>
    );
};

export default Premium;