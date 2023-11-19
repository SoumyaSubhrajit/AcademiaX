import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <div className='bg-gray-800 text-white py-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='text-2xl font-bold ml-10'>AcademiaX</div>
          <div className='flex space-x-4 mr-10'>
            <button className='hover-button'>Learn Lesson</button>
            <button className='button'>Login</button>
            <button className='button'>Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
