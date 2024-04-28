import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import fit from '../../assets/image/fit.jpg'
import OIP from '../../assets/image/OIP.jpg'
const SliderComponent = () => {
   
  // Swiper configuration options
  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  };
  const diabetesAppAdvertisements = [
    {
      headline: "Stay in Control of Your Blood Sugar Levels!",
      description: "Track your blood glucose levels effortlessly with our intuitive diabetes app. Get real-time insights into your blood sugar trends and fluctuations. Set personalized target ranges and receive alerts for high or low readings.",
      imageUrl:fit
    },
    {
      headline: "Make Smart Food Choices with Our Diabetes App!",
      description: "Log your meals and track carbohydrate intake to better manage your diabetes. Access a comprehensive database of foods with carb counts for easy meal planning. Get personalized recommendations based on your dietary preferences and blood sugar levels.",
      imageUrl: OIP
    },
    {
      headline: "Never Miss a Dose Again!",
      description: "Manage your medications and insulin doses efficiently using our app. Set reminders for medication schedules and insulin injections. Keep a record of your prescriptions and easily share them with your healthcare provider.",
      imageUrl: "medication_management_image.jpg"
    },
    {
      headline: "Stay Active, Stay Healthy!",
      description: "Monitor your physical activity levels and their impact on blood sugar. Access exercise plans tailored to your fitness level and diabetes management goals. Track steps, calories burned, and other metrics to stay motivated and on track.",
      imageUrl: fit
    },
    {
      headline: "Visualize Your Progress with Detailed Reports!",
      description: "View comprehensive reports summarizing your diabetes management progress. Identify patterns, trends, and areas for improvement with insightful data visualization. Share reports with your healthcare team for informed discussions and personalized care.",
      imageUrl: OIP
    },
    {
      headline: "Join a Supportive Diabetes Community!",
      description: "Connect with others managing diabetes and share experiences in a supportive community. Access expert advice, tips, and resources to enhance your diabetes journey. Stay motivated and inspired by engaging with peers who understand your challenges.",
      imageUrl:fit
    }
  ];
  
  return (<>
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >{diabetesAppAdvertisements.map(({headline,description,imageUrl})=>{
        return <SwiperSlide>
            <div className='sliderCard'>
            <h4>{headline}</h4>
            <p>{description}</p>
            <img src={imageUrl}/>
            </div>
        </SwiperSlide>
    })}
    </Swiper>
  </>
  );
};

export default SliderComponent;
