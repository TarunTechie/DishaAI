import React, { useEffect, useRef } from 'react';
import './hsap.css';


const Hsap = () => {
    const sunRef = useRef(null);
    const orbitLinesRefs = useRef([]);
    const planetsRefs = useRef([]);
    const descriptionsRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3 // Adjust intersection threshold as needed
        };

        const animateOnIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateElements();
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(animateOnIntersection, observerOptions);

        // Observe sun
        if (sunRef.current) {
            observer.observe(sunRef.current);
        }

        // Observe orbit lines
        orbitLinesRefs.current.forEach(orbitLine => {
            observer.observe(orbitLine);
        });

        // Observe planets
        planetsRefs.current.forEach(planet => {
            observer.observe(planet);
        });

        // Observe descriptions
        descriptionsRefs.current.forEach(description => {
            observer.observe(description);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const animateElements = () => {
        // Animate sun size and opacity
        if (sunRef.current) {
            sunRef.current.style.opacity = '1';
            sunRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
        }

        // Animate orbit lines opacity
        orbitLinesRefs.current.forEach((orbitLine, index) => {
            setTimeout(() => {
                orbitLine.style.opacity = '1';
            }, (index + 1) * 200); // Faster speed: 300ms delay
        });

        // Animate planets opacity
        planetsRefs.current.forEach((planet, index) => {
            setTimeout(() => {
                planet.style.opacity = '1';
            }, (index + 1) * 500); // Faster speed: 700ms delay
        });

        // Animate descriptions opacity and position
        descriptionsRefs.current.forEach((description, index) => {
            setTimeout(() => {
                description.style.opacity = '1';
                description.style.transform = 'translate(-50%, -50%) scale(1)';
            }, (index + 1) * 500); // Faster speed: 1000ms delay
        });
    };

    return (
        <div className="hsap-container bg-blue-900/10">
            <h1>Holistic Student Assessment Program (HSAP)</h1>
            <div className="solar-system">
                <div ref={sunRef} className="sun">HSAP</div>

                <div ref={el => orbitLinesRefs.current.push(el)} className="orbit orbit-sar">
                    <div ref={el => planetsRefs.current.push(el)} className="planet sar">
                        <h3>SAR</h3>
                    </div>
                </div>
                <div ref={el => descriptionsRefs.current.push(el)} className="orbit orbit-sar-desc">
                    <img className="rocket" src="/images/Rocketicon.png" alt="RocketIcon" />
                    <div className="planet-description">
                        <p>Student Assessment Report (SAR): Based On Our Decades of Research on Assessments.</p>
                    </div>
                </div>

                <div ref={el => orbitLinesRefs.current.push(el)} className="orbit orbit-sap">
                    <div ref={el => planetsRefs.current.push(el)} className="planet sap">
                        <h3>SAP</h3>
                    </div>
                </div>
                <div ref={el => descriptionsRefs.current.push(el)} className="orbit orbit-sap-desc">
                    <img className="rocket" src="/images/Rocketicon.png" alt="RocketIcon" />
                    <div className="planet-description">
                        <p>Student Academic Performance (SAP): Yearly Student Academic Performance.</p>
                    </div>
                </div>

                <div ref={el => orbitLinesRefs.current.push(el)} className="orbit orbit-sep">
                    <div ref={el => planetsRefs.current.push(el)} className="planet sep">
                        <h3>SEP</h3>
                    </div>
                </div>
                <div ref={el => descriptionsRefs.current.push(el)} className="orbit orbit-sep-desc">
                    <img className="rocket" src="/images/Rocketicon.png" alt="RocketIcon" />
                    <div className="planet-description">
                        <p>Student Engagement Platform (SEP): Captures Students Experiences, Observations and Interests In A Seamless Manner on a Regular Basis.</p>
                    </div>
                </div>

                <div ref={el => orbitLinesRefs.current.push(el)} className="orbit-line orbit-line-1"></div>
                <div ref={el => orbitLinesRefs.current.push(el)} className="orbit-line orbit-line-2"></div>
                <div ref={el => orbitLinesRefs.current.push(el)} className="orbit-line orbit-line-3"></div>
            </div>
        </div>
    );
};

export default Hsap;
