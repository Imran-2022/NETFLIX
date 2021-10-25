import React from 'react';
import { Link } from 'react-router-dom';
import { MdFlightTakeoff } from "react-icons/md";

const Home = () => {
    return (
        <div className="home">
            <div className="container home-center">
                <h1 className="display-1">See what's next</h1>
                <h2 className="display-3">watch anywhere , cancel anytime</h2>
                <div>
                <Link onClick={()=>setTimeout(window.scrollTo(0, 0), 0)}  className="btn btn-primary  p-2 m-3" to="/chose-plan">Try it now <MdFlightTakeoff/></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;