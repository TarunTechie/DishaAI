import React, { useEffect } from 'react';
import './NEPPolicy.css';

const NEPPolicy = () => {
    useEffect(() => {
        const handleScroll = () => {
            const sun = document.querySelector('.sun');
            const orbitLines = document.querySelectorAll('.orbit-line');
            const planets = document.querySelectorAll('.planet');
            const descriptions = document.querySelectorAll('.orbit-sar-desc, .orbit-sap-desc, .orbit-sep-desc');

            // Animate sun size and opacity
            if (sun && isElementInViewport(sun)) {
                sun.style.opacity = '1';
                sun.style.transform = 'translate(-50%, -50%) scale(1)';
            }

            // Animate orbit lines opacity
            orbitLines.forEach((orbitLine, index) => {
                setTimeout(() => {
                    if (isElementInViewport(orbitLine) && orbitLine.style.opacity !== '1') {
                        orbitLine.style.opacity = '1';
                    }
                }, (index + 1) * 500); // Delay for each orbit line
            });

            // Animate planets opacity
            planets.forEach((planet, index) => {
                setTimeout(() => {
                    if (isElementInViewport(planet) && planet.style.opacity !== '1') {
                        planet.style.opacity = '1';
                    }
                }, (index + 1) * 1000); // Delay for each planet
            });

            // Animate descriptions opacity and position
            descriptions.forEach((description, index) => {
                setTimeout(() => {
                    if (isElementInViewport(description) && description.style.opacity !== '1') {
                        description.style.opacity = '1';
                        description.style.transform = 'translate(-50%, -50%) scale(1)';
                    }
                }, (index + 1) * 1500); // Delay for each description
            });
        };

        const isElementInViewport = (el) => {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger once on initial load

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="nep-policy-container">
            <h1>Holistic Student Assessment Program (HSAP)</h1>
            <div className="solar-system">
                <div className="sun">HSAP</div>

                <div className="orbit orbit-sar">
                    <div className="planet sar">
                        <h3>SAR</h3>
                    </div>
                </div>
                <div className="orbit orbit-sar-desc">
                    <img className="rocket" src="/images/Rocketicon.png" alt="RocketIcon" />
                    <div className="planet-description">
                        <p>Student Assessment Report (SAR): Based On Our Decades of Research on Assessments.</p>
                    </div>
                </div>

                <div className="orbit orbit-sap">
                    <div className="planet sap">
                        <h3>SAP</h3>
                    </div>
                </div>
                <div className="orbit orbit-sap-desc">
                    <img className="rocket" src="/images/Rocketicon.png" alt="RocketIcon" />
                    <div className="planet-description">
                        <p>Student Academic Performance (SAP): Yearly Student Academic Performance.</p>
                    </div>
                </div>

                <div className="orbit orbit-sep">
                    <div className="planet sep">
                        <h3>SEP</h3>
                    </div>
                </div>
                <div className="orbit orbit-sep-desc">
                    <img className="rocket" src="/images/Rocketicon.png" alt="RocketIcon" />
                    <div className="planet-description">
                        <p>Student Engagement Platform (SEP): Captures Students Experiences, Observations and Interests In A Seamless Manner on a Regular Basis.</p>
                    </div>
                </div>

                <div className="orbit-line orbit-line-1"></div>
                <div className="orbit-line orbit-line-2"></div>
                <div className="orbit-line orbit-line-3"></div>
            </div>
        </div>
    );
};

export default NEPPolicy;
