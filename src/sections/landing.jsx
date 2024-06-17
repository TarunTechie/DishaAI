// Landing.js
import React from 'react';
import ParticlesComponent from '../components/particles';

export default function Landing() {
  return (
    <div className='flex h-screen bg-blue-900/10 overflow-clip'>
      <ParticlesComponent id="par"/>
        <div className='flex items-center'>
        <h1 className='text-2xl font-bold w-1/3 mx-auto'>
        DISHA<sup>AI</sup> is a holistic education technology provider. It provides Continuous Assessment, Complementary Educational 
        programs and Enterprise Systems to aid Schools to create a seamlessly integrated pedagogy for Students.
        </h1>
        <img src="/images/landing.png" className='w-1/2'/>
        </div>
    </div>
  )
}
