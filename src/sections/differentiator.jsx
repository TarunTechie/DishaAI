import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Differentiator = () => {
    const [loaded, setLoaded] = useState(false);
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3 // Adjust threshold as needed
        };

        const animateOnIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setLoaded(true); // Trigger animations
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(animateOnIntersection, observerOptions);

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={sectionRef} className="bg-[#002c46] text-white py-16 px-4 lg:flex lg:justify-between lg:px-32">
            <div className="max-w-full lg:max-w-[1200px] mx-auto lg:flex lg:items-center lg:space-x-16">
                <div ref={textRef} className={`lg:w-1/2 transform transition-transform duration-1000 ${loaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                    <h1 className="text-4xl font-bold mb-4">DISHAᴬᴵ DIFFERENTIATOR</h1>
                    <ul className="pl-5 space-y-4">
                        <li className="flex space-x-2">
                            <div className="flex flex-col items-start mt-1 mr-2">
                                <div className="w-4 h-[2px] bg-white mb-1"></div>
                                <div className="w-8 h-[2px] bg-white"></div>
                            </div>
                            <span>The ONLY AI based platform in alignment with the NEP guidelines and expectations.</span>
                        </li>
                        <li className="flex space-x-2">
                            <div className="flex flex-col items-start mt-1 mr-2">
                                <div className="w-4 h-[2px] bg-white mb-1"></div>
                                <div className="w-8 h-[2px] bg-white"></div>
                            </div>
                            <span>Combines 50+ years of research and 30+ years of global IVY league experience to develop a simplistic and accurate system applicable across all tier schools of India.</span>
                        </li>
                        <li className="flex space-x-2">
                            <div className="flex flex-col items-start mt-1 mr-2">
                                <div className="w-4 h-[2px] bg-white mb-1"></div>
                                <div className="w-8 h-[2px] bg-white"></div>
                            </div>
                            <span>Not just a ONE-TIME solution, but involves CONTINUOUS ASSESSMENT based on the Child's growth in terms of Academics, Exposure and Experience.</span>
                        </li>
                        <li className="flex space-x-2">
                            <div className="flex flex-col items-start mt-1 mr-2">
                                <div className="w-4 h-[2px] bg-white mb-1"></div>
                                <div className="w-8 h-[2px] bg-white"></div>
                            </div>
                            <span>Student Assessment Report (SAR) involves 7 different types of analysis before arriving at the Career Alignment for students.</span>
                        </li>
                        <li className="flex space-x-2">
                            <div className="flex flex-col items-start mt-1 mr-2">
                                <div className="w-4 h-[2px] bg-white mb-1"></div>
                                <div className="w-8 h-[2px] bg-white"></div>
                            </div>
                            <span>Ease of testing, analysis and personalised-reporting in quick time.</span>
                        </li>
                    </ul>
                    <Link to="/differentiator">
                        <button className={`mt-8 py-2 px-6 bg-white text-[#002c46] font-semibold rounded cursor-pointer transform transition-transform duration-1000 ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                            Learn more
                        </button>
                    </Link>
                </div>
                <div ref={imageRef} className={`flex justify-center items-center lg:w-1/2 mt-8 lg:mt-0 ml-0 lg:ml-18 transform transition-transform duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                    <img
                        src="/images/Differentiator.png"
                        alt="3D Puzzle"
                        className="w-80 lg:w-[450px] animate-float"
                    />
                </div>
            </div>
        </div>
    );
};

export default Differentiator;
