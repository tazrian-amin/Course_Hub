import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <Accordion defaultActiveKey="0" className='w-75 mx-auto'>
            <h2 className='p-2 my-4 bg-dark bg-gradient text-light text-center rounded border border-2 border-warning'>Frequently Asked Questions</h2>
            <Accordion.Item eventKey="0">
                <Accordion.Header>How can I get premium access to a course?</Accordion.Header>
                <Accordion.Body>
                    For premium access to any of our courses, you must be logged in to your account. In case you do not have an account, you have to create one. Otherwise you cannot get access to our premium section.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>How can I register in your website?</Accordion.Header>
                <Accordion.Body>
                    To register for an account, you can choose any of the three Sign Up method that we provided on the registration page. You can either register by filling out the Registration Form or by providing your information through your Google / GitHub account.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>


        // <div className='w-75 mx-auto'>
        //     <h2 className='p-2 mt-4 bg-dark text-light text-center rounded border border-2 border-warning'>Frequently Asked Questions</h2>
        //     <div className='col p-3 my-3 border border-2 border-warning rounded bg-dark text-white'>
        //         <h3 className='fw-bold mb-4 text-warning'>What is cors?</h3>
        //         <p className='fs-5 fw-semibold'>The word CORS stands for “Cross-Origin Resource Sharing”. Cross-Origin Resource Sharing is an HTTP-header based mechanism implemented by the browser which allows a server or an API(Application Programming Interface) to indicate any origins (different in terms of protocol, hostname, or port) other than its origin from which the unknown origin gets permission to access and load resources. The cors package available in the npm registry is used to tackle CORS errors in a Node.js application. </p>
        //     </div>
        //     <div className='col p-3 my-3 border border-2 border-warning rounded bg-dark text-white'>
        //         <h3 className='fw-bold mb-4 text-warning'>Why are you using firebase? What other options do you have to implement authentication?</h3>
        //         <p className='fs-5 fw-semibold'>We are using firebase to host websites, do user authentication and more so that we do not have to worry for our own server. Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. <br />Other than firebase, user authentication options are also available. Like- Auth0, MongoDB, Passport, Okta, etc.</p>
        //     </div>
        //     <div className='col p-3 my-3 mb-4 border border-2 border-warning rounded bg-dark text-white'>
        //         <h3 className='fw-bold mb-4 text-warning'>How does the private route work?</h3>
        //         <p className='fs-5 fw-semibold'>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
        //     </div>
        // </div>
    );
};

export default FAQ;