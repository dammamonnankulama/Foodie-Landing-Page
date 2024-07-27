// react interitence 
// rafce
import React from 'react';
import Navbar from './Navbar';
import BannerImage from "../Assets/home-banner-image.png";
import BannerBackground from "../Assets/home-banner-background.png";
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>

        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
                <img src={BannerBackground} alt="" />

            </div>
            <div className='home-image-container'>
                <img src={BannerImage} alt="" />

            </div>






            <div className='home-text-section'>
                <h1 className='primary-heading'>
                    What's Your Favourite?

                </h1>
                <p className='primary-text'>
                    Healthy Switcher chefs do all the prep work for you,
                    including peeling,choppinh and marinating.
                    So you can effortlessly cook fresh,delicious meals. 

                </p>
                <button className='secondary-button'>
                    Place Your Order Now < FiArrowRight/>

                </button>


            </div>

        </div>

    </div>
  );
};

export default Home;