import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css"
const NotFound = () => {
    return (
        <div className="notfound">
            <h5>
                <p>page not found</p>
                <p>go <Link to="/home">Home</Link></p>

            </h5>
        </div>
    );
};

export default NotFound;