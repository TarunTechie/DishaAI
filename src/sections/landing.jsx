// Landing.js
import React from 'react';
import ParticlesComponent from '../components/particles';

export default function Landing() {
    return (
        <div className='flex h-screen bg-blue-900/10 overflow-clip w-full'>
            <ParticlesComponent id="par"/>
            <div className='flex items-center'>
                <h1 className='text-lg font-bold font-mono mx-auto bg-white/40 p-8 rounded-xl m-4 md:bg-white/5 md:backdrop-blur md:text-2xl md:w-1/2'>
                    DISHA<sup>AI</sup> is a holistic education technology provider. It provides Continuous Assessment, Complementary Educational
                    programs and Enterprise Systems to aid Schools to create a seamlessly integrated pedagogy for Students.
                </h1>
                <img src="/images/landing.png" className='absolute -z-10 w-full md:relative md:z-0 md:w-1/2'/>
            </div>
        </div>
    )
}