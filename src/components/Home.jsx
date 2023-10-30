import React from 'react'
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Restaurante FOODIE
          </h1>
          <p className="primary-text">
            Ofrece gran variedad de platillos y gran variedad de bebidas, reserva ya y no te pierdas de estos platillos.
          </p>
          <button className="secondary-button">
            Reserva ya! <FiArrowRight />{}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home;
