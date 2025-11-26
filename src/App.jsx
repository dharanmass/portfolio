import Layout from './components/Layout';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      {/* Other sections will be added here */}
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
