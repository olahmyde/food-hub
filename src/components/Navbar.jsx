import React from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            { /* Lef Side */}
            <div className='flex items-center'>
                <div className='cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Food <span className='font-bold'>Hub</span> </h1>

                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                    <p className='p-2'>Pickup</p>

                </div>
            </div>

            {/* Search Input */}
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={20} className='ml-4' />
                <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='Search foods' />
            </div>

            { /* Cart Buttons */}
            <button className='bg-black text-white hidden md:flex justify-between items-center gap-2 py-2 rounded-full'>
                <BsFillCartFill size={20} /> Cart
            </button>

            {/* Mobile menu */}

            {/* Overlay */}
            <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>

            <div className='fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'>
                <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' />
                <h2>Food <span>Hub</span></h2>
            </div>
        </div>
    )
}


export default Navbar