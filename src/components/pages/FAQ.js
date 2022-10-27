import React from 'react';

const FAQ = () => {
    return (
        <div>
            <h3 className='mt-3 text-center'>Frequently Asked Questions</h3>
            <div className='col p-3 my-3 border border-2 border-warning rounded bg-dark text-white '>
                <h2 className='fw-bold mb-4'>what is cors?</h2>
                <p className='fs-5 fw-semibold'>The word CORS stands for “Cross-Origin Resource Sharing”. Cross-Origin Resource Sharing is an HTTP-header based mechanism implemented by the browser which allows a server or an API(Application Programming Interface) to indicate any origins (different in terms of protocol, hostname, or port) other than its origin from which the unknown origin gets permission to access and load resources. The cors package available in the npm registry is used to tackle CORS errors in a Node.js application. </p>
            </div>
            <div className='col p-3 my-3 border border-2 border-warning rounded bg-dark text-white '>
                <h2 className='fw-bold mb-4'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p className='fs-5 fw-semibold'>We are using firebase to host websites, do user authentication and more so that we do not have to worry for our own server. Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. <br />Other than firebase, user authentication options are also available. Like- Auth0, MongoDB, Passport, Okta, etc.</p>
            </div>
            <div className='col p-3 my-3 mb-4 border-2 border-warning rounded bg-dark text-white '>
                <h2 className='fw-bold mb-4'>How does the private route work?</h2>
                <p className='fs-5 fw-semibold'>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>
        </div>
    );
};

export default FAQ;