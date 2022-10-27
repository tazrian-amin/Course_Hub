import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Login = () => {

    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(res => {
                const user = res.user;
                // console.log(user);
                setError('');
                form.reset();
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Please verify your Email to continue.');
                }
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })

        // console.log(email, password);
    }

    return (
        <Form onSubmit={handleSubmit} className='border p-4'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <Form.Text className="text-muted ms-2">
                Haven't registered yet? <Link to="/register"><small>Register here</small></Link>
            </Form.Text>
            <Form.Group className="mt-2">
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form.Group>
        </Form>
    );
};

export default Login;