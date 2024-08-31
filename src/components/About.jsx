import React from 'react';

export default function AboutSection() {
  return (
    <div className='flex min-h-screen justify-center items-center'>
      <div className='w-11/12 md:w-3/4 mx-auto'>
        <div className='flex flex-col md:flex-row items-start'>
          <div className='w-full md:w-1/4 flex-shrink-0 mb-5 border-r-0 md:border-r-4 border-b-4 md:rounded-br-xl border-indigo-300 text-indigo-300 pb-4'>
            <p className="dm-serif-display-title text-center md:text-left">Introduction</p>
          </div>
          <div className='w-full md:w-3/4 px-4 md:px-10 flex flex-col justify-between'>
            <div>
              <div className="h-auto mb-4 text-justify">
                <p>
                  My full name is RAKOTOMAMONJY Harififaliana Manitra Fitia Mariella. I’m a 19-year-old Malagasy student with an unwavering passion for development and a deep-rooted curiosity for how things work in the digital realm. The tech world, with its endless possibilities, has always fascinated me. From the moment I wrote my first line of code, I knew that this was the path I wanted to follow. Each project I undertake is not just a task but a new adventure, a chance to learn something new and push the boundaries of my creativity.
                </p>
              </div>
              <div className="h-auto rounded bg-violet-100 p-6 md:p-10 mt-5 text-justify">
                <p>Being part of this vast and dynamic field excites me because there’s always something new to discover, whether it's mastering a new programming language, designing user-friendly interfaces, or exploring the latest trends in mobile development. I am driven by the desire to contribute to this world, to create innovative solutions that can make a difference, and to continuously grow both as a developer and as an individual.</p>
              </div>
            </div>
            <a className='self-center md:self-end p-2 rounded-xl poppins-regular border-2 border-violet-300 text-violet-300 mt-4'>
              Learn more ...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
