import React from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { FaStar, FaUsers } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {

    const courses = useLoaderData();
    const [firstSlide, secondSlide, thirdSlide] = courses;
    console.log(firstSlide)

    return (
        <Carousel variant="dark" className='mt-4 border border-2 border-dark rounded'>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded-top"
                    src={firstSlide.image_url}
                    alt="First slide"
                />
                <div className='bg-dark bg-gradient border-top border-dark text-center pt-2 pb-5'>
                    <h3 className='text-light'>{firstSlide.title}</h3>
                    <p className='fw-semibold text-light'><FaStar className='text-warning'></FaStar> Rating: {firstSlide.rating.number} || <FaUsers className='text-warning'></FaUsers> Enrolled: {firstSlide.total_enrolled}</p>
                    <Link to={`/course/${firstSlide._id}`}>
                        <Button className='fw-semibold' variant="warning">See Details</Button>
                    </Link>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded-top"
                    src={secondSlide.image_url}
                    alt="Second slide"
                />
                <div className='bg-dark bg-gradient border-top border-dark text-center pt-2 pb-5'>
                    <h3 className='text-light'>{secondSlide.title}</h3>
                    <p className='fw-semibold text-light'><FaStar className='text-warning'></FaStar> Rating: {secondSlide.rating.number} || <FaUsers className='text-warning'></FaUsers> Enrolled: {secondSlide.total_enrolled}</p>
                    <Link to={`/course/${secondSlide._id}`}>
                        <Button className='fw-semibold' variant="warning">See Details</Button>
                    </Link>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded-top"
                    src={thirdSlide.image_url}
                    alt="Third slide"
                />
                <div className='bg-dark bg-gradient border-top border-dark border-top text-center pt-2 pb-5'>
                    <h3 className='text-light'>{thirdSlide.title}</h3>
                    <p className='fw-semibold text-light'><FaStar className='text-warning'></FaStar> Rating: {thirdSlide.rating.number} || <FaUsers className='text-warning'></FaUsers> Enrolled: {thirdSlide.total_enrolled}</p>
                    <Link to={`/course/${thirdSlide._id}`}>
                        <Button className='fw-semibold' variant="warning">See Details</Button>
                    </Link>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Home;