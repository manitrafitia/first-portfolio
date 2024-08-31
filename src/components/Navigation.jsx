import React from 'react';

export default function Navigation() {
  return (
    <div className=''>
      <div className="flex flex-col md:flex-row justify-center items-center border-2 border-violet-300 mx-auto fixed bg-white right-4 md:right-20 rounded-xl m-4 px-4 mb-10">
        <div className="text-xl dm-serif-display-main mb-4 md:mb-0 md:pr-10 text-indigo-300">
          <span>.portfolio</span>
        </div>
        <nav className="flex flex-col md:flex-row poppins-regular">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 list-none">
            <li className="hover:text-indigo-300 p-4 text-indigo-300 poppins-bold"><a href="">Main</a></li>
            <li className="hover:text-indigo-500 p-4"><a href="">Services</a></li>
            <li className="hover:text-indigo-500 p-4"><a href="">About</a></li>
            <li className="hover:text-indigo-500 p-4"><a href="">Skills</a></li>
            <li className="hover:text-indigo-500 p-4"><a href="">Projects</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}