import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { MdFlightTakeoff } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Navbarr from '../Navbar';
import "./Choseplan.css"
const Choseplan = () => {
    return (
        <>
        <Navbarr/>
        <div className="choseplan">
            <div className="choseplan-in">
                <img src="Images_public/Checkmark.png" alt="" />
                <span>step 1 of 3</span>
                <h2>Choose your plan</h2>
                <p><FaCheck/> No Commentments Cancel anytime</p>
                <p><FaCheck/> Everything on Netflix for one low price</p>
                <p><FaCheck/> Unlimited viewing for all your devices</p>
                <Link onClick={()=>alert(`hi there ! let's enjoy .`)} className="btn btn-primary  p-2 m-3" to="/chose-plan">Try it now <MdFlightTakeoff /></Link>

            </div>
        </div>
        </>
    );
};

export default Choseplan;