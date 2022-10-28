import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaDownload, FaStar, FaUsers } from 'react-icons/fa';
import Pdf from 'react-to-pdf';
import { createRef } from 'react';

const CourseDetails = () => {

    const course = useLoaderData();
    const { _id, title, image_url, details, rating, total_enrolled } = course;
    const ref = createRef();

    return (
        <div ref={ref}>
            <h2 className='p-2 mt-4 bg-dark bg-gradient text-light text-center w-75 mx-auto rounded border border-2 border-warning'>Course Details</h2>
            <Card className='w-75 mx-auto mt-4 p-2 bg-dark text-white rounded border border-2 border-warning'>
                <Card.Header className='d-flex align-items-center justify-content-between'>
                    <h3 className='text-warning'>{title}</h3>
                    <Pdf targetRef={ref} filename="Course-Details.pdf">
                        {({ toPdf }) => <Button variant='outline-dark' className='text-warning' onClick={toPdf}><FaDownload></FaDownload></Button>}
                    </Pdf>
                </Card.Header>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <div>
                        <p><FaStar className='text-warning'></FaStar> Rating : {rating.number}</p>
                        <p><FaUsers className='text-warning'></FaUsers> Enrolled : {total_enrolled}</p>
                    </div>
                    <div className='text-center'>
                        <Link to={`/checkout/${_id}`} course={course}>
                            <Button className='fw-semibold' variant="warning">Enroll For Premium Access</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;