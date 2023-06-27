import React from 'react'
import Navbar from '../../components/Navbar';
import BannerImage from "../../Assets/home-banner-image.png";

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
              <button className="primary-button">
               View Details
              </button>
            </div>
            <div className="home-image-section">
              <img src={BannerImage} alt="" />
            </div>
          </div>
        </div>
      );
    };

export default Landing;