import React from 'react';
import ProfilePic from "../Assets/damma-image.png";
import { AiFillStar } from 'react-icons/ai';

const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonial</p>
            <h1 className='primary-heading'>What They are Saying</h1>

            <p className='primary-text'>
            "Foodie has completely transformed my meal planning. 
            The meals are delicious and so convenient. 
            I love the variety and the quality of the ingredients. Highly recommend!"</p>

            <p className='primary-text'>
            "I've tried several meal delivery services, 
            and Foodie is by far the best. The flavors are incredible, 
            and the portions are perfect. It's like having a gourmet chef in my kitchen."

            </p>
            <p className='primary-text'>
            "As a busy professional, Foodie has been a game-changer for me. I no longer have to worry about what to eat or spend hours meal prepping. The delivery is always on time, and the meals are fantastic."

            </p>

            
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt="" />
            <p>
            "Foodie offers a great selection of meals that cater to different tastes and dietary preferences.
             The quality is top-notch, and the convenience is unbeatable. I'm a customer for life!"


            </p>
            <div className='testimonials-stars-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>

            </div>
            <h2>Damma Deshan</h2>

        </div>

    </div>
  );
};

export default Testimonial;