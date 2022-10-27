import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaEye, FaStar } from 'react-icons/fa';

const CourseCard = ({ course }) => {
    console.log(course);
    const { details, image_url, rating, title, total_enrolled, _id } = course;

    return (
        <Card className='w-75 mx-auto my-4 bg-dark text-white'>
            <Card.Header>
                <h3 className='text-warning'>{title}</h3>
            </Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={image_url} />
                <Card.Text className='mt-3'>
                    {
                        details.length > 250 ?
                            <>{details.slice(0, 250) + '...'} <Link to={`/course/${_id}`}><small>Read More</small></Link></>
                            :
                            <>{details}</>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_enrolled}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default CourseCard;