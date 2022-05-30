import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import Categories from './Categories';
import Extra1 from './Extra1';
import Extra2 from './Extra2';
import Review from './Review';
import Summery from './Summery';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
            <Extra1></Extra1>
            <Categories></Categories>
            <Summery></Summery>
            <Review></Review>
            <Extra2></Extra2>
            <Footer></Footer>
        </div>
    );
};

export default Home;