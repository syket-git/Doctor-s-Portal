import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="margin-top">
            <h1 className="text-center text-danger">Not Found!</h1>
            <h2 className="text-center text-danger">404 Error</h2>

            <Link to="/">
                <div className="text-center mt-5">
                <button className="btn btn-secondary text-uppercase">Back to Home</button>
                </div>   
            </Link>
        </div>
    );
};

export default NotFound;