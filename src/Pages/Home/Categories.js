import { React,  useEffect, useState } from 'react';
import CategoriesService from './CategoriesService';

const Categories = () => {

    const [services, setServices] = useState([]);

    useEffect( ()=> {
        fetch('https://protected-inlet-11024.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    return (
        <div className='my-10'>
            <h2 className='text-center text-2xl text-secondary font-bold '>Top Categories</h2>
            <div className='grid  md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-10'>
               {
                  services.slice(0,3).map(service => <CategoriesService  key={service._id}
                    service = {service}></CategoriesService>
                   
                    
                ) 
               } 
            </div>
        </div>
    );
};

export default Categories;