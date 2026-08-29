// import React from 'react';
import playStore from '../assets/playstore.png'
import appStore from '../assets/appStore.png'
import bannerImage from '../assets/hero.png'

const Banner = () => {
  return (
    <div className="mt-10">
      {/* text div */}
      <div>
        <h1 className="text-6xl font-bold text-center">We Build <br /> <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps</h1>
        <p className="text-center mt-5 text-[#627382]">At HERO.IO, we craft innovative apps designed to  make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences  that truly make an impact.</p>
        <div className="mt-10 flex gap-5 justify-center">
            <button className="btn font-semibold"><img className='w-8 h-8' src={playStore} alt="" />Play Store</button>
            <button className="btn font-semibold"><img className='w-8 h-8' src={appStore} alt="" />App Store</button>
        </div>
        {/* img div of banner */}
       <div className='mt-7 flex justify-center'>
         <img src={bannerImage} alt="" />
       </div>
      </div>
      {/* trending div */}
      <div className="relative left-1/2 w-screen -translate-x-1/2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-10 py-10 text-center text-white">
        <h1 className='font-bold text-4xl'> Trusted by Millions, Built for You</h1>
       <div className='flex gap-20 justify-center mt-10'>
         <div>
            <p><small>Total Downloads</small></p>
            <h1 className='font-bold text-5xl'>29.6M</h1>
            <p><small>21% more than last month</small></p>
        </div>
         <div>
            <p><small>Total Reviews</small></p>
            <h1 className='font-bold text-5xl'>906K</h1>
            <p><small>46% more than last month</small></p>
        </div>
         <div>
            <p><small>Active Apps</small></p>
            <h1 className='font-bold text-5xl'>132+</h1>
            <p><small>31 more will Launch</small></p>
        </div>
       </div>
       
      </div>
    </div>
  );
};

export default Banner;
