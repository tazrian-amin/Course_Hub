import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Aside = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://learning-platform-server-eta-seven.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='bg-dark text-white p-4 mt-4 border border-2 border-warning'>
            <h4 className='my-4'>Course Category</h4>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link className='text-decoration-none fw-semibold text-warning' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Aside;