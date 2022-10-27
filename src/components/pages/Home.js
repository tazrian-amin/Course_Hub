import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Home = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <div>
            <h3 className='text-center'>Welcome to Course Hub</h3>
            {
                courses.map(course => <CourseCard
                    key={course._id}
                    course={course}
                ></CourseCard>)
            }
        </div>
    );
};

export default Home;