import React from 'react';
// import components
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Team from './components/Team';
import Footer from './components/Footer';
import ModalMenu from './components/ModalMenu';
// import Reservation from './components/Reservation';
// import Testimonial from './components/Testimonial';

const App = () => {

  return (
    <div className='h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden'>
      <Hero />
      <About />
      <Menu />
      <Team />
      {/* <Testimonial /> */}
      {/* <Reservation /> */}
      <Footer />
      {/* <ModalMenu onClose={handleOnClose} visible={showModalMenu}/> */}
      <div className='h-[380px] md:h-[370px]'></div>
    </div>
  );
};

export default App;