import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Register = () => {

    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // User Profile update 
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        };
        updateUserProfile(profile)
            .then(() => { })
            .catch(err => console.error(err.message))
    }

    // Register New User
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                navigate(from, { replace: true });
                toast.success('Registration Complete! Please reload the page.')
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
            })
    }

    // Terms & Conditions checkbox
    const handleCheck = (event) => {
        setAccepted(event.target.checked);
    }

    return (
        <div className='w-50 mx-auto mt-4 border border-2 border-warning p-4 bg-dark text-warning'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className='fw-semibold'>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name='name' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label className='fw-semibold'>Photo URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter photo URL" name='photoURL' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-semibold'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-semibold'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        className='fw-semibold'
                        type="checkbox"
                        onClick={handleCheck}
                        label={<>Accept <Link to="/terms"><small> Terms & Conditions</small></Link></>} />
                </Form.Group>
                <Button className='fw-bold' variant="warning" type="submit" disabled={!accepted}>
                    Register
                </Button>
                <Form.Text className="text-muted ms-2">
                    Already have an account? <Link to="/login"><small>Login here</small></Link>
                </Form.Text>
                <Form.Group className="mt-2">
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Register;