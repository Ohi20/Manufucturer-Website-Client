import {React,  useState } from 'react';
import Footer from '../../Shared/Footer';
import Availablepurchase from './Availablepurchase';
import Purchasebanner from './Purchasebanner';

const Purchase = () => {

    const [date, setDate]= useState(new Date());

    return (
        <div>
            <Purchasebanner date={date}
            setDate={setDate}></Purchasebanner>
            <Availablepurchase date={date}
            setDate={setDate}></Availablepurchase>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;