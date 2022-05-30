import React from 'react';
import bannerHome from '../../Assets/images/bannerHome.jpg';

const Banner = () => {
    return (
        <div class="hero my-10">
  <div class="hero-content flex-col lg:flex-row">
    <div className='mr-5'>
    <img src={bannerHome} class="max-w-sm  rounded-lg shadow-2xl" />
    </div>
    <div className='ml-5'>
      <h1 class="text-5xl font-bold">WelCome!</h1>
      <p class="py-6 text-2xl">Equip Your Creativity </p>
      <button class="btn btn-outline text-secondary">Get Started</button>
    </div>
    
  </div>
</div>
    );
};

export default Banner;