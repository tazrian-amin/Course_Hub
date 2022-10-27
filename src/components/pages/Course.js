import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaDownload } from 'react-icons/fa';

const Course = () => {
    const course = useLoaderData();
    // console.log(course);
    const { _id, title, image_url, details } = course;
    return (
        <Card className='w-75 mx-auto mt-4 bg-dark text-white'>
            <Card.Header className='d-flex align-items-center justify-content-between'>
                <h3 className='text-warning'>{title}</h3>
                <Link className='text-warning' to=''><FaDownload></FaDownload></Link>
            </Card.Header>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Text>
                    {details}
                </Card.Text>
                <div className='text-center'>
                    <Link to={`/checkout/${_id}`} course={course}>
                        <Button className='fw-semibold' variant="warning">Get Premium Access</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Course;