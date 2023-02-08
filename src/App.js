import './index.css';
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import SocialLinks from './components/SocialLinks.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { motion } from 'framer-motion'


function App() {
  return (
    <motion.div
      initial={{ y: -240 }}
      animate={{ y: 0 }}
    >
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;
