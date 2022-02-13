import React from 'react';
import './home.css';
import Doctor1 from '../../videos/Doctor1.mp4';
import Navbar from '../Navbar/Navbar';


function Home() {
  return (
    <div className='hero-container'>
        <Navbar/>
     {/* <video src='./videos/Doctor1.mp4' autoPlay loop muted /> */}
     <video autoPlay muted loop src={Doctor1} type="Doctor1" />

   <div className='hero-btns'>

    <h2>We bring together content owners and video platforms to
     <h1>THRIVE</h1>in the new world. A multi-screen world.</h2>
     
    
      </div>

    </div>
  );
}

export default Home;
