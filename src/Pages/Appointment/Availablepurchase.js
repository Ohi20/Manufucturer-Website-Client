import React from 'react';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

import Bookingmodal from './Bookingmodal';
import Service from './Service';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Loading from './../../Shared/Loading';

const Availablepurchase = ({date}) => {

    const [treatment, setTreatment] = useState(null); 
    const [services, setServices] = useState([]);

    const formatedDate = format(date, "PP");

    

    

    // https://protected-inlet-11024.herokuapp.com/service
    
    useEffect( ()=> {
        fetch('https://protected-inlet-11024.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setServices(data));
    },[formatedDate])


    return (
        <div>
            <h4 className='text-2xl text-center text-secondary my-8'>Available Appointments on: {format(date, 'PP')} </h4>
            <div className='grid  md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-10'>
               {
                  services?.map(service => <Service 
                    key={service._id}
                    service = {service}
                    setTreatment= {setTreatment}>
                </Service>) 
               } 
            </div>
            {treatment && <Bookingmodal date={date} 
            treatment={treatment}
            setTreatment={setTreatment}></Bookingmodal>}
        </div>
    );
};

export default Availablepurchase;