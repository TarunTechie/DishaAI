// Landing.js
import React from 'react';
import ParticlesComponent from '../components/particles';
import './landing.css';

export default function Landing() {
    return (
        <div className='landing'>
            <ParticlesComponent id="par" />
            <div className='content'>
                <h1 className='headline'>
                    DISHA<sup>AI</sup> is a holistic education technology provider. It provides Continuous Assessment, Complementary Educational programs and Enterprise Systems to aid Schools to create a seamlessly integrated pedagogy for Students.
                </h1>
                <img src="/images/landing.png" className='landing-image' alt="Landing Image" />
            </div>
        </div>
    )
}
