import React from 'react';
import './NEPPolicy.css';

const NEPPolicy = () => {
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
                    <img className="rocket" src="/images/RocketIcon.png" alt="RocketIcon" />
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
                    <img className="rocket" src="/images/RocketIcon.png" alt="RocketIcon" />
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
                    <img className="rocket" src="/images/RocketIcon.png" alt="RocketIcon" />
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
