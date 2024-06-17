// Landing.js
import React from 'react';
import ParticlesComponent from '../components/particles';

export default function Landing() {
  return (
    <div className='flex  h-screen bg-blue-200'>
      <ParticlesComponent id="par"/>
        <div className=' flex items-center w-1/2 mx-auto'><h1>
        DISHAAI is a holistic education technology provider. It provides Continuous Assessment, Complementary Educational 
        programs and Enterprise Systems to aid Schools to create a seamlessly integrated pedagogy for Students.
        </h1>
        </div>
    </div>
  )
}
