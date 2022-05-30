import React from 'react';

const CategoriesService = ({ service }) => {

    const { name, slots } = service;

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl className='grid sm:grid-cols-1'">
            <div class="card-body">
                <h2 class="card-title text-primary text-2xl">{name}</h2>
                <p className='text-xl'>
                    {
                        slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>No Slot Available </span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center">

                    
                </div>
            </div>
        </div>
    );
};

export default CategoriesService;