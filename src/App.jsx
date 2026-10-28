import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Certifications from './components/Certifications/Certifications'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <div className="floating-code" aria-hidden="true">
        <span>{"const build = () => ship();"}</span>
        <span>{"<Component />"}</span>
        <span>{"app.get('/api', handler)"}</span>
        <span>{"db.collection('users')"}</span>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
