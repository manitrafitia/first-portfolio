import React, { useState } from 'react';

export default function Aboutme() {
  const [activeSection, setActiveSection] = useState('Education');

  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='w-11/12 md:w-3/4 mx-auto mb-10 min-h-screen'>
      <div>
        <p className='dm-serif-display-title text-right py-10 text-indigo-300'>Want to know better about me ?</p>
      </div>
      <nav>
        <ul className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 list-none justify-center items-center'>
          <li
            className={`p-2 rounded ${activeSection === 'Education' ? 'bg-violet-500' : 'bg-violet-300'} text-white flex-1 text-left max-w-xs cursor-pointer`}
            onClick={() => handleClick('Education')}
          >
            Education
          </li>
          <li
            className={`p-2 rounded ${activeSection === 'Skills' ? 'bg-violet-500' : 'bg-violet-300'} text-white flex-1 text-left max-w-xs cursor-pointer`}
            onClick={() => handleClick('Skills')}
          >
            Skills
          </li>
          <li
            className={`p-2 rounded ${activeSection === 'Interest' ? 'bg-violet-500' : 'bg-violet-300'} text-white flex-1 text-left max-w-xs cursor-pointer`}
            onClick={() => handleClick('Interest')}
          >
            Interest
          </li>
        </ul>
      </nav>
      <div className='pt-5'>
        {activeSection === 'Education' && (
          <div className='p-10'>
                <p className="text-justify">I am currently pursuing a Bachelor's degree in Computer Science, with a focus on Software Engineering and System and Network Administration.</p>
                <p className="poppins-semibold text-lg pt-4">Ecole Nationale d'Informatique, Université de Fianarantsoa</p>
                <p className="text-indigo-300 poppins-semibold">2023-2024</p>
                <p className="text-justify">Third year of Bachelor in Computer Science</p>
                <p className="poppins-semibold text-lg pt-4">Ecole Nationale d'Informatique, Université de Fianarantsoa</p>
                <p className="text-indigo-300 poppins-semibold">2022-2023</p>
                <p className="text-justify">Second year of Bachelor in Computer Science</p>
                <p className="poppins-semibold text-lg pt-4">Ecole Nationale d'Informatique, Université de Fianarantsoa</p>
                <p className="text-indigo-300 poppins-semibold">2021-2022</p>
                <p className="text-justify">Third year of Bachelor in Computer Science</p>
          </div>
        )}
        {activeSection === 'Skills' && (
          <div>
              <div className='flex justify-between item-center p-10'>
            <div className='text-left'>
              <h1 className='dm-serif-display-subtitle'>Programming Languages</h1>
              <div className="flex flex-row">
              <div className='p-2 m-2 rounded-full border border-violet-300 hover:bg-violet-300 hover:text-white'>Python</div>
              <div className='p-2 m-2 rounded-full border border-violet-300 hover:bg-violet-300 hover:text-white'>Java</div>
              <div className='p-2 m-2 rounded-full border border-violet-300 hover:bg-violet-300 hover:text-white'>C++</div>
              <div className='p-2 m-2 rounded-full border border-violet-300 hover:bg-violet-300 hover:text-white'>JavaScript</div>
            </div>
            </div>
            <div className='text-left'>
              <h1 className='dm-serif-display-subtitle'>Web Development</h1>
              <div className="flex flex-row">
              <div className='p-2 m-2 rounded-full border border-violet-300 hover:bg-violet-300 hover:text-white'>HTML/CSS</div>
              <div className='p-2 m-2 rounded-full border border-violet-300 hover:bg-violet-300 hover:text-white'>Node js</div>
              <div className='p-2 m-2 rounded-full border border-violet-300 hover:bg-violet-300 hover:text-white'>React js</div>
              <div className='p-2 m-2 rounded-full border border-violet-300 hover:bg-violet-300 hover:text-white'>SpringBoot</div>
              <div className='p-2 m-2 rounded-full border border-violet-300 hover:bg-violet-300 hover:text-white'>Express js</div>
            </div>
            </div>
          </div>
          <div className='flex justify-between item-center p-10'>
            <div className='text-left'>
              <h1 className='dm-serif-display-subtitle'>Programming Languages</h1>
              <div className="flex flex-row">
              <div className='p-2 m-2 rounded-full border border-violet-300 hover:bg-violet-300 hover:text-white'>Python</div>
              <div className='p-2 m-2 rounded-full border border-violet-300 hover:bg-violet-300 hover:text-white'>Java</div>
              <div className='p-2 m-2 rounded-full border border-violet-300 hover:bg-violet-300 hover:text-white'>C++</div>
              <div className='p-2 m-2 rounded-full border border-violet-300 hover:bg-violet-300 hover:text-white'>JavaScript</div>
            </div>
            </div>
            <div className='text-left'>
              <h1 className='dm-serif-display-subtitle'>Web Development</h1>
              <div className="flex flex-row">
                <div className='p-2 m-2 rounded-full border border-violet-300 hover:bg-violet-300 hover:text-white'>HTML/CSS</div>
                <div className='p-2 m-2 rounded-full border border-violet-300 hover:bg-violet-300 hover:text-white'>Node js</div>
                <div className='p-2 m-2 rounded-full border border-violet-300 hover:bg-violet-300 hover:text-white'>React js</div>
                <div className='p-2 m-2 rounded-full border border-violet-300 hover:bg-violet-300 hover:text-white'>SpringBoot</div>
                <div className='p-2 m-2 rounded-full border border-violet-300 hover:bg-violet-300 hover:text-white'>Express js</div>
              </div>
            </div>
          </div>
          </div>
        )}
        {activeSection === 'Interest' && (
          <div>
            <div className="p-6 my-2 bg-slate-100">Software Engineering</div>
            <div className="p-6 my-2 bg-slate-100">Network and System Administration</div>
            <div className="p-6 my-2 bg-slate-100">Cybersecurity</div>
            <div className="p-6 my-2 bg-slate-100">Machine Learning</div>
          </div>
        )}
      </div>
    </div>
  );
}
