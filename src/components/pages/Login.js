import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Login = () => {

    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // Log in using Email & Password
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(() => {
                setError('');
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const { providerLogin } = useContext(AuthContext);

    // Log in with Google Provider 
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    // Log in with GitHub Provider 
    const githubProvider = new GithubAuthProvider();
    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='mt-4 border border-2 border-warning p-4 bg-dark bg-gradient text-warning'>
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
                    <Button onClick={handleGithubSignIn} className='mb-2' variant="outline-light"><FaGithub></FaGithub> Login with GitHub</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default Login;