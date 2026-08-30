import './Certifications.css';

function Certifications() {
    return (
        <section className="certifications" id="certifications">
            <div className="certifications-content">
                <span className="certifications-badge">CERTIFICATIONS</span>
                <h2>Continued learning.</h2>
                <div className="certifications-list">
                    <article className="certification-item">
                        <h3>Full-Stack Web Development</h3>
                        <p>Triple10 Bootcamp Certification</p>
                    </article>
                    <article className="certification-item">
                        <h3>JavaScript Algorithms and Data Structures</h3>
                        <p>FreeCodeCamp Certification</p>
                    </article>
                    <article className="certification-item">
                        <h3>Responsive Web Design</h3>
                        <p>FreeCodeCamp Certification</p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Certifications;