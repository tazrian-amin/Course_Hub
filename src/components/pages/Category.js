import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Category = () => {

    const categoryCourse = useLoaderData();
    console.log(categoryCourse);

    return (
        <div>
            <h2 className='p-2 mt-4 bg-dark bg-gradient text-light text-center w-75 mx-auto rounded border border-2 border-warning'>Courses on this category : {categoryCourse.length}</h2>
            {
                categoryCourse.map(course => <CourseCard
                    key={course._id}
                    course={course}
                ></CourseCard>)
            }
        </div>
    );
};

export default Category;