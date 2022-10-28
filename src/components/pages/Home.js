import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Home = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <div>
            <h2 className='p-2 mt-4 bg-dark text-light text-center w-75 mx-auto rounded border border-2 border-warning'>Welcome to Course Hub</h2>
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