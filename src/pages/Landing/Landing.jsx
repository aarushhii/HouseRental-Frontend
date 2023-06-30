import React,{useContext} from 'react'
import Navbar from '../../components/Navbar';
import BannerImage from "../../Assets/home-banner-image.png";
import { Link } from 'react-router-dom';
// import { AuthContext } from "../context/AuthContext";

const Landing= () => {
    return (
        <div className="home-container">
          <Navbar />
          <div className="home-banner-container">
            <div className="home-bannerImage-container">
            </div>
            <div className="home-text-section">
              <h1 className="primary-heading">
                Managing Rents made easy
              </h1>
              <p className="primary-text">
               View property and rent details, all in one place
              </p>
              <Link to={"/property"} className="primary-button text-light">
               View Details
              </Link>
            </div>
            <div className="home-image-section">
              <img src={BannerImage} alt="" />
            </div>
          </div>
        </div>
      );
    };

export default Landing;