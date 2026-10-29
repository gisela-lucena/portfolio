import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Certifications from "../../components/Certifications/Certifications";
import Contact from "../../components/Contact/Contact";

function Home() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
        </>
    );
}

export default Home;