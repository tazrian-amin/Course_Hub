import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
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

    const { user, providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(res => {
                const user = res.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='w-50 mx-auto mt-4 border border-2 border-warning p-4 bg-dark text-warning'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-semibold'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-semibold'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>
                <Button className='fw-bold' variant="warning" type="submit">
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
            <div className='mt-4 text-center'>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-light"><FaGoogle></FaGoogle> Login with Google</Button>
                    <Button className='mb-2' variant="outline-light"><FaGithub></FaGithub> Login with GitHub</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default Login;