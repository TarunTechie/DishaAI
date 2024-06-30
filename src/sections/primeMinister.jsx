import React from 'react';
import { Link } from 'react-router-dom';

const PrimeMinister = () => {
    return (
        <div className="bg-[#002c46] text-white py-16 px-4 lg:flex lg:justify-between lg:px-32">
            <div className="max-w-full lg:max-w-[1200px] mx-auto lg:flex lg:items-center lg:space-x-8">
                <div className="lg:w-1/2">
                    <p className="text-sm text-gray-300 mb-4">Prime minister's vision as DISHAᴬᴵ mission</p>
                    <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                        The new NEP Policy introduces AI to track student progress and guide career choices, alongside younger vocational standards, major-minor subjects, flexible 4-year programs, and a national aptitude test.
                    </h1>
                    <Link to="/genesis">
                        <button className="py-2 px-6 bg-white text-[#002c46] font-semibold rounded cursor-pointer">
                            Learn more
                        </button>
                    </Link>
                </div>
                <div className="lg:w-1/2 mt-8 lg:mt-0">
                    <div className="aspect-w-16 aspect-h-9">
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
        </div>
    );
};

export default PrimeMinister;
