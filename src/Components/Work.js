import React from 'react';
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {

    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Start by exploring our diverse menu filled with delicious and nutritious meal options. Whether you're in the mood for something classic or adventurous, we have something to satisfy every palate. Simply browse through our selection and pick the meals that catch your eye.",
            
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Next, customize your meal plan according to your lifestyle. Whether you need meals for the whole week or just a few days, you can choose the frequency that best fits your schedule. Enjoy the flexibility of adjusting your meal deliveries as needed.",
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "Once you've made your selections, sit back and relax. Our team will freshly prepare your meals and deliver them straight to your doorstep. We ensure timely and efficient delivery so that your food arrives fresh and ready to enjoy.",
        },
    ];

    return (
        <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <p className='primary-subheading'>Work</p>
                <h1 className='primary-heading'>How It Works</h1>
                <p className='primary-text'>
                With your meals delivered, all that's left to do is enjoy!
                Our meals are designed to be both delicious and easy to reheat,
                making your dining experience convenient and delightful.
                Savor the flavors and enjoy balanced, healthy eating with minimal effort.
                </p>
            </div>
            <div className='work-section-bottom'>
                {workInfoData.map((data, index) => (
                    <div className='work-section-info' key={index}>
                        <div className='info-boxes-img-container'>
                            <img src={data.image} alt={data.title} />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;
