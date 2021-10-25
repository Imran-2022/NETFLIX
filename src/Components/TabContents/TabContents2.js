import React from 'react';
import { MdFlightTakeoff } from "react-icons/md";
import { Link } from 'react-router-dom';

const TabContents2 = () => {
    return (
        <div className="contentss">
           
            <div className="contents-in">
                <p>Watch Tv shows and movies anytime, anywhere .- personalized for you. </p>
                <Link onClick={()=>setTimeout(window.scrollTo(0, 0), 0)}  className="btn btn-primary  p-2 m-3" to="/chose-plan">Try it now <MdFlightTakeoff/></Link>
            </div>
            <div className="img3">
                <img width="100%" src="Images_public/tab-tv.png" alt="" />
                <img width="100%" src="Images_public/tab-macbook.png" alt="" />
                <img width="100%" src="Images_public/tab-tablet.png" alt="" />
            </div>
        </div>
    );
};

export default TabContents2;