import logo from '../../logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark py-4 mt-4 text-center text-white'>
            <img
                alt=""
                src={logo}
                width="35"
                height="35"
                className="d-inline-block align-top"
            />{' '}
            <Link className='fs-5 fw-bolder text-white text-decoration-none' to="/">Course Hub</Link>
            <p className='mt-3 text-warning'>© 2022 Course Hub || All rights reserved.</p>
        </div>
    );
};

export default Footer;