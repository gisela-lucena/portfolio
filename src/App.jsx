import { Route, Routes } from 'react-router-dom'
import Filmera from './pages/Filmera/Filmera'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToSection from './components/ScrollToSection/ScrollToSection'

function App() {

  return (
    <>
      <div className="floating-code" aria-hidden="true">
        <span>{"const build = () => ship();"}</span>
        <span>{"<Component />"}</span>
        <span>{"app.get('/api', handler)"}</span>
        <span>{"db.collection('users')"}</span>
      </div>
      <ScrollToSection />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/filmera" element={<Filmera />} />
          <Route path="*" element={<div className="section-container"><h1>Page Not Found</h1><a href="/">Back to Home</a></div>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
