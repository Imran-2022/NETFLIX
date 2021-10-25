import React from 'react';
import { Table } from 'react-bootstrap';
import { MdFlightTakeoff } from "react-icons/md";
import { Link } from 'react-router-dom';
import {FaTimes,FaCheck} from "react-icons/fa";
const TabContents3 = () => {
    const scrl=() => {
        window.scrollTo(0, 0);
    }
      // setTimeout(function() { window.scrollTo(500, 0); }, 0);
    return (
        <div className="contentss">
            <div className="contents-in">
                <p>Watch Tv shows and movies anytime, anywhere .- personalized for you. </p>
                <Link onClick={()=>setTimeout(window.scrollTo(0, 0), 0)} className="btn btn-primary  p-2 m-3" to="/chose-plan">Try it now <MdFlightTakeoff /></Link>
            </div>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th colSpan="2"></th>
                            <th>Basic</th>
                            <th>Standard</th>
                            <th>Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td colSpan="2">Monthly Price</td>
                            <td>$9.99</td>
                            <td>$13.99</td>
                            <td>$16.45</td>
                        </tr>
                        <tr>
                        <td colSpan="2">HD available</td>
                            <td><FaTimes/></td>
                            <td><FaCheck/></td>
                            <td><FaCheck/></td>
                        </tr>
                        <tr>
                        <td colSpan="2">Ultra HD available</td>
                            <td><FaTimes/></td>
                            <td><FaTimes/></td>
                            <td><FaCheck/></td>
                        </tr>
                        <tr>
                        <td colSpan="2">screens you can watch all the time</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                        </tr>
                        <tr>
                        <td colSpan="2">watch on your tv, laptop, mobile or tablet</td>
                            <td><FaTimes/></td>
                            <td><FaTimes/></td>
                            <td><FaCheck/></td>
                        </tr>
                        <tr>
                        <td colSpan="2">Unlimited movies and tv shoes.</td>
                            <td><FaTimes/></td>
                            <td><FaTimes/></td>
                            <td><FaCheck/></td>
                        </tr>
                        <tr>
                        <td colSpan="2">Cancel anytime.</td>
                            <td><FaTimes/></td>
                            <td><FaTimes/></td>
                            <td><FaCheck/></td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default TabContents3;