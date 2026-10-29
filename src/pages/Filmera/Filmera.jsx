import { Link } from "react-router-dom";
import "./Filmera.css";

function Filmera() {
    return (
        <section className="project-detail">
            <div className="section-container">
                <Link to="/#projects">← Back to projects</Link>

                <p className="section-label">FULL-STACK PROJECT</p>
                <h1>Filmera</h1>

                <p>
                    A project spanning a React web application, an iOS app
                    built with React Native, and a Node.js REST API.
                </p>

                <div className="project-detail-actions">
                    <a
                        href="https://filmera.us/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                    >
                        Open web app ↗
                    </a>

                    <a
                        href="https://apps.apple.com/us/app/filmera/id6779366077"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                    >
                        View iOS app ↗
                    </a>

                    <a
                        href="https://github.com/gisela-lucena/filmera-backend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                    >
                        Backend source ↗
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Filmera;