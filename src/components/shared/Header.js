import logo from '../../logo.png';
import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import Aside from './Aside';
import { AuthContext } from '../contexts/AuthProvider';
import { useState } from 'react';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const [show, setShow] = useState(true);

    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img
                        alt=""
                        src={logo}
                        width="45"
                        height="45"
                        className="d-inline-block align-top"
                    />{' '}
                    <Link className='me-4 fs-3 text-decoration-none fw-semibold text-white' to="/">Course Hub</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='mx-4 text-decoration-none fw-semibold text-warning' to="/">Courses</Link>
                        <Link className='mx-4 text-decoration-none fw-semibold text-warning' to="/faq">FAQ</Link>
                        <Link className='mx-4 text-decoration-none fw-semibold text-warning' to="/blog">Blog</Link>
                    </Nav>
                    <Nav>
                        <Nav title={`${user?.displayName}`} className='pe-2 pt-2 text-warning'>
                            {user?.photoURL ?
                                <Image
                                    src={user.photoURL}
                                    style={{ height: '30px' }}
                                    roundedCircle
                                ></Image>
                                :
                                <FaUserAlt></FaUserAlt>
                            }
                        </Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <Button onClick={handleLogOut} className='ms-2' variant="outline-danger">Sign Out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'><Button className='mx-2' variant="outline-warning">Log In</Button></Link>
                                    </>
                            }
                        </>
                        <>
                            {
                                show ? <p className='px-3 mt-2 text-warning'>Light</p> : <p className='px-3 mt-2 text-warning'>Dark</p>
                            }
                            {
                                <button className='btn btn-dark' onClick={() => setShow(!show)}>Toggle Theme</button>
                            }
                        </>
                    </Nav>
                    <div className='d-lg-none'>
                        <Aside></Aside>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;