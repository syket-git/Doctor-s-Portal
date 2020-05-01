import React from 'react';
import './Banner.css'
import img from '../../images/image.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="background">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="margin-top">
                            <h2 className="h2">Your New Smile <br/> Starts Here</h2>
                            <p>A dentist, also known as a dental surgeon, is a surgeon who specializes in dentistry, the diagnosis, prevention, and treatment of diseases and conditions of the oral cavity. The dentist's supporting team aids in providing oral health services.</p>
                            <Link to="/doctor/appointment">
                            <button className="btn button text-uppercase">get appointment</button></Link>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="margin-top">
                            <img className="img-fluid" src={img} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;