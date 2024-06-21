import React, { useEffect, useRef, useState } from 'react';
import './genesis.css';

export default function Genesis() {
    const imageRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!isLoaded && imageRef.current) {
                const elementTop = imageRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight * 0.75) {
                    setIsLoaded(true);
                    imageRef.current.classList.add('loaded');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isLoaded]);

    return (
        <div className="genesis-container bg-blue-900/10">
            <div className="genesis-content">
                <img
                    src="/images/Genesis.png"
                    alt="Genesis"
                    className={`genesis-image ${isLoaded ? 'loaded' : ''}`}
                    ref={imageRef}
                />
                <div className="genesis-text bg-white/40 rounded-xl md:bg-white/5 md:backdrop-blur">
                    <h1 className="genesis-heading">Genesis of DISHAᴬᴵ</h1>
                    <p className="genesis-paragraph">
                        The last NEP changes happened 28 years ago.
                        In this period, significant changes have taken place in the Indian economy and the world at large.
                        It is in this context that the new NEP wishes to gear India towards the demands of the 21st Century, with Quality,
                        Innovation and Research forming the pillars on which India will become a knowledge super power.
                        <br/><br/>
                        Today, career is not about just a job, education or skill; it's about one’s passion and the desire to fulfil ones dreams.
                        Like, You-Tube, Gamers, Hackers, IPL, Radio Jockey, Organic Farming, Yoga, Nano Engineering, Robotics, Coding, Healthcare, etc.
                        We know how complex choosing the right career can be for students stuck between the usual vocations and the new-age professions.
                        This has led to the birth of DISHA!
                    </p>
                </div>
            </div>
        </div>
    );
}
