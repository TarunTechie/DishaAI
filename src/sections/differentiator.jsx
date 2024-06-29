import { useEffect, useRef } from "react";

export default function Differentiator() {
    const imageRef = useRef(null);

    useEffect(() => {
        const imageElement = imageRef.current;
        if (imageElement) {
            imageElement.classList.add("animate-float");
        }
    }, []);

    return (
        <div className="flex flex-col items-center justify-center bg-[#002c46] text-white py-16 px-4 lg:flex-row lg:justify-between lg:px-32">
            <div className="max-w-xl mb-8 lg:mb-0">
                <h1 className="text-4xl font-bold mb-4">DISHAᴬᴵ DIFFERENTIATOR</h1>
                <ul className="pl-5 space-y-4 ">
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
                <button className="mt-8 py-2 px-6 bg-white text-blue-900 font-semibold rounded hover:bg-gray-200">Learn more</button>
            </div>
            <div className="flex justify-center items-center">
                <img
                    src="/images/Differentiator.png"
                    alt="3D Puzzle"
                    className="w-80 lg:w-[450px] animate-float"
                    ref={imageRef}
                />
            </div>
        </div>
    );
}
