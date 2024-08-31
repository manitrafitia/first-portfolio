import React from 'react';
import Navigation from './Navigation.jsx';
// import photo from '../assets/images/photo.jpg';

export default function Introduction() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navigation />
      <div className="flex flex-grow flex-col justify-center items-center">  
        <div className="flex flex-col md:flex-row justify-center items-center md:p-10 w-full md:w-3/4 mx-auto">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img  alt="Mariella" className="h-96 w-96 md:h-96 md:w-96 object-cover  text-violet-300 rounded-lg" />
          </div>
          <div className="w-full px-4 md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <p className="dm-serif-display-main text-indigo-300 text-lg">Fitia Mariella Rakotomamonjy</p> 
            <div className="pt-4">
              <span className="poppins-regular block w-full text-justify">
                "Hello, I'm Mariella Rakotomamonjy. Welcome to my portfolio, where you can learn more about my journey and passion for technology."
              </span>
            </div>
            <div className='mt-5 flex flex-col md:flex-row justify-between items-center'>
              <div className='flex space-x-4'>
                <a href="https://github.com/manitrafitia" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6 text-violet-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.29 3.44 9.76 8.21 11.35.6.11.81-.26.81-.58v-2.04c-3.34.73-4.04-1.56-4.04-1.56-.55-1.4-1.35-1.77-1.35-1.77-1.1-.76.08-.75.08-.75 1.21.08 1.85 1.25 1.85 1.25 1.08 1.84 2.84 1.31 3.53 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.12-.31-.54-1.57.12-3.27 0 0 1.02-.33 3.34 1.26.97-.27 2-.41 3.03-.41 1.03 0 2.05.14 3.02.41 2.32-1.59 3.34-1.26 3.34-1.26.66 1.7.24 2.96.12 3.27.77.84 1.24 1.92 1.24 3.24 0 4.63-2.81 5.66-5.49 5.96.43.37.81 1.1.81 2.21v3.29c0 .32.21.69.82.58A11.978 11.978 0 0024 12C24 5.37 18.63 0 12 0z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6 text-violet-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V9h3v10zm-1.5-11.08c-1.03 0-1.88-.85-1.88-1.88s.85-1.88 1.88-1.88 1.88.85 1.88 1.88c0 1.03-.85 1.88-1.88 1.88zm13.5 11.08h-3v-5.56c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93v5.65h-3v-10h2.89v1.38h.04c.4-.75 1.37-1.54 2.83-1.54 3.01 0 3.56 1.98 3.56 4.57v5.59z" />
                  </svg>
                </a>
              </div>
              <button className='p-2 mt-4 md:mt-0 rounded-xl poppins-regular border-2 border-violet-300 text-violet-300'>
                Download resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
