import React from 'react';
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt="About Background" />
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt="About Background Image" />
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                Balanced Eating Starts with Great Food
            </h1>
            <p className='primary-text'>
                We believe that the foundation of a healthy, balanced diet begins with
                the quality of the food you choose.
            </p>
            <p className='primary-text'>
                Our focus is on providing you with fresh, nutritious ingredients and expertly
                crafted recipes that make healthy eating enjoyable and effortless.
            </p>
            <div className='about-buttons-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'>
                    <BsFillPlayCircleFill /> Watch Video
                </button>
            </div>
        </div>
    </div>
  );
};

export default About;
