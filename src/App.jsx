import { useState } from 'react';
import './App.css';
import Introduction from './components/Introduction';
import About from './components/About';
import Footer from './components/Footer';
import Services from './components/Services';
import Aboutme from './components/Aboutme';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col min-h-screen text-slate-700 poppins-regular'>
      <div className='flex-grow'>
        <Introduction />
        <About />
        <Services></Services>
        <Aboutme></Aboutme>
      </div>
      <Footer />
    </div>
  );
}

export default App;
