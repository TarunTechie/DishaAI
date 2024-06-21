import { Link } from "react-router-dom";
import "./primeMinister.css"

export default function PrimeMinister() {
    return (
        <div className="prime-minister-container">
            <div className="prime-minister-content">
                <div className="prime-minister-text">
                    <p>Prime minister's vision as DISHAᴬᴵ’s mission</p>
                    <h1>
                        As a mission-driven organization,
                        we're relentlessly pursuing our vision of a world where every learner can access education to
                        unlock their potential, without the barriers of cost or location.
                    </h1>
                    <Link to="/genesis">
                        <button className="learn-more-button">Learn more</button>
                    </Link>
                </div>
                <div className="prime-minister-video">
                    {/* Placeholder for video */}
                    {/* Replace with actual video component or embed code */}
                    <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Prime Minister's Vision Video"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
