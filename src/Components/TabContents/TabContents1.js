import React from 'react';
import "./TabContents.css"
import { MdFlightTakeoff } from "react-icons/md";
import { Link } from 'react-router-dom';

const TabContents1 = () => {
    return (
        <div className="contents">
           
            <div>
                <p>If you decide Netflix isn't for you !- no problem,No commitment , cancel Online anytime . </p>
                <Link className="btn btn-primary  p-2 m-3" to="/">Try it now <MdFlightTakeoff/></Link>
                
            </div>
            <img width="100%" src="Images_public/tab-1-pic.png" alt="" />
        </div>
    );
};

export default TabContents1;