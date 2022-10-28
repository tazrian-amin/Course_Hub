import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {

    const courses = useLoaderData();

    return (
        <div>
            <h2 className='p-2 mt-4 bg-dark text-light text-center w-75 mx-auto rounded border border-2 border-warning'>Our Courses</h2>
            {
                courses.map(course => <CourseCard
                    key={course._id}
                    course={course}
                ></CourseCard>)
            }
        </div>
    );
};

export default Courses;