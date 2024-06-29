import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const PrimeMinister = () => {
    const primeMinisterTextRef = useRef(null);
    const primeMinisterButtonRef = useRef(null);
    const primeMinisterIframeRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const primeMinisterText = primeMinisterTextRef.current;
            const primeMinisterButton = primeMinisterButtonRef.current;
            const primeMinisterIframe = primeMinisterIframeRef.current;

            if (primeMinisterText && primeMinisterButton && primeMinisterIframe) {
                const elementTop = primeMinisterText.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight * 0.75) {
                    primeMinisterText.classList.add('animated');
                    primeMinisterButton.classList.add('animated');
                    primeMinisterIframe.classList.add('animated');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-[#002c46] text-white py-16 px-4 lg:flex lg:justify-between lg:px-32">
            <div className="max-w-full lg:max-w-[1200px] mx-auto lg:flex lg:items-center lg:space-x-8">
                <div className={`lg:w-1/2 ${primeMinisterTextRef.current && primeMinisterTextRef.current.classList.contains('animated') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-80 lg:opacity-100 lg:translate-x-0 lg:transition-opacity lg:ease-in-out lg:duration-800'}`} ref={primeMinisterTextRef}>
                    <p className="text-sm text-gray-300 mb-4">Prime minister's vision as DISHAᴬᴵ mission</p>
                    <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                        The new NEP Policy introduces AI to track student progress and guide career choices, alongside younger vocational standards, major-minor subjects, flexible 4-year programs, and a national aptitude test.
                    </h1>
                    <Link to="/genesis">
                        <button className={`py-2 px-6 bg-white text-[#002c46] font-semibold rounded cursor-pointer ${primeMinisterButtonRef.current && primeMinisterButtonRef.current.classList.contains('animated') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-150 lg:opacity-100 lg:translate-x-0 lg:transition-opacity lg:ease-in-out lg:duration-800'}`} ref={primeMinisterButtonRef}>
                            Learn more
                        </button>
                    </Link>
                </div>
                <div className={`lg:w-1/2 lg:p-0 mt-8 lg:mt-0 ${primeMinisterIframeRef.current && primeMinisterIframeRef.current.classList.contains('animated') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-80 lg:opacity-100 lg:translate-y-0 lg:transition-opacity lg:ease-in-out lg:duration-800'}`} ref={primeMinisterIframeRef}>
                    <iframe
                        className="w-full h-80 lg:h-90"
                        src="https://www.youtube.com/embed/6Y_ar5xKS28?si=thAP2ttd4Aa8JfEv"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default PrimeMinister;
