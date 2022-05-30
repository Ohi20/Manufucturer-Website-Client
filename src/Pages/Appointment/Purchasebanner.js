import React from 'react';
import bannerHome from '../../Assets/images/bannerHome.jpg';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const Purchasebanner = ({date, setDate}) => {
    return (
        <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={bannerHome} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
    <DayPicker mode="single"
      selected={date}
      onSelect={setDate}
       />
    <p className='text-center'>You have picked : {format(date, 'PP')}.</p>
    </div>
  </div>
</div>
    );
};

export default Purchasebanner;