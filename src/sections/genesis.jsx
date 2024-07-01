import React, { useEffect, useRef, useState } from 'react';

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
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isLoaded]);

    return (
        <div className="min-h-screen flex justify-center items-center overflow-hidden bg-blue-900/10 p-4 sm:p-8 lg:p-8">
            <div className="flex flex-col items-center lg:flex-row lg:items-start text-left max-w-7xl mx-auto space-y-8 lg:space-y-0 lg:space-x-6 xl:space-x-12">
                <img
                    src="/images/Genesis.png"
                    alt="Genesis"
                    className={`w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[550px] lg:max-h-[550px] mb-4 lg:mb-0 lg:mr-6 xl:mr-12 transition-transform duration-750 ease-in-out ${isLoaded ? 'animate-slideInFloat' : 'opacity-0 -translate-x-[15%]'}`}
                    ref={imageRef}
                />
                <div className="max-w-xl bg-white/40 rounded-xl md:bg-white/5 md:backdrop-blur p-4 md:p-6 lg:p-8">
                    <h1 className="text-[#002C46] text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Genesis of DISHAᴬᴵ</h1>
                    <p className="text-base md:text-lg leading-relaxed text-justify">
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
