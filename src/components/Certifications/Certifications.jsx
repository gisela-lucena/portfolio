import './Certifications.css';

function Certifications() {
    return (
        <section className="certifications" id="certifications">
            <div className="section-container certifications-content">
                <span className="section-label">CERTIFICATIONS</span>
                <h2>Continued learning</h2>
                <div className="certifications-grid">
                    <article className="certification-card">
                        <h3>Full-Stack Web Development</h3>
                        <p>Triple10 Bootcamp Certification</p>
                    </article>
                    <article className="certification-card">
                        <h3>Bachelor of Science in Software Engineering</h3>
                        <p>Western Governors University - Present</p>
                    </article>
                    <article className="certification-card">
                        <h3>Algorithms Course</h3>
                        <p>Curso em Video Certification</p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Certifications;