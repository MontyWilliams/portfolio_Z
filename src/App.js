import './index.css';
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import SocialLinks from './components/SocialLinks.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'


function App() {
  const components = [
  <Home />,
  <SocialLinks />,
  <About />,
  <Portfolio />,
  <Experience />,
  <Contact />,
]
const { scrollY } = useScroll()
useMotionValueEvent(scrollY, "change", (latest) => {
  console.log("Page scroll: ", latest)
})
const divVar = {
  hide: {
    opacity: 0.43
    
  }
}
  return (
    <div>
      <NavBar />
      {components.map((comp) => {
        return (
        <motion.div
          className=""
          variants={divVar}
          initial="hide"
          whileInView={{ opacity: 1}}
          transition={{ duration: 1.1}}       
        >
          {comp}
        </motion.div>
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
