import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './primeMinister.css';

export default function PrimeMinister() {
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
        <div className="prime-minister-container">
            <div className="prime-minister-content">
                <div className={`prime-minister-text`} ref={primeMinisterTextRef}>
                    <p>Prime minister's vision as DISHAᴬᴵ’s mission</p>
                    <h1>
                        The new NEP Policy introduces AI to track student progress and guide career choices, alongside younger vocational standards, major-minor subjects, flexible 4-year programs, and a national aptitude test.
                        {/*The new NEP Policy introduces AI software to track student progress through school and make optimal career choices, along with vocational subjects at younger standards, major-minor subjects, Multiple Entry and Exits in a 4 year Graduate program, and a national aptitude test.*/}
                    </h1>
                    <Link to="/genesis">
                        <button className={`learn-more-button`} ref={primeMinisterButtonRef}>
                            Learn more
                        </button>
                    </Link>
                </div>
                <div className={`prime-minister-video`} ref={primeMinisterIframeRef}>
                    <iframe
                        src="https://www.youtube.com/embed/4tSX7Y7b91c?si=Cdhu77nGjhwPX50R"
                        title="Prime Minister's Vision Video"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
