import React from 'react';
import Puffpuff from '../assets/puff_puff.png';
import Asun from '../assets/asun.jpg';
import MeatPie from '../assets/meatpie.jpg';

const HeadlineCards = () => {
    return (
        <>
            <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
                {/* Card */}
                <div className='rounded-xl relative'>
                    {/* Overlay */}
                    <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                        <p className='font-bold text-2xl px-2 pt-4'> Puff Puff</p>
                        <p className='px-2 text-[15px]'>Quick Snack</p>
                        <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                    </div>
                    <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={Puffpuff} alt='/'></img>
                </div>

                {/* Card */}
                <div className='rounded-xl relative'>
                    {/* Overlay */}
                    <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                        <p className='font-bold text-2xl px-2 pt-4'> Asun</p>
                        <p className='px-2 text-[15px]'>Peppered meat</p>
                        <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                    </div>
                    <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={Asun} alt='/'></img>
                </div>

                {/* Card */}
                <div className='rounded-xl relative'>
                    {/* Overlay */}
                    <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                        <p className='font-bold text-2xl px-2 pt-4'> Meat Pie</p>
                        <p className='px-2 text-[15px]'>Pastries</p>
                        <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                    </div>
                    <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={MeatPie} alt='/'></img>
                </div>
            </div>
        </>

    )
}

export default HeadlineCards