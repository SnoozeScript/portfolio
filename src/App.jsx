
import Layout from './components/Layout/Layout';
import Hero from './components/Sections/Hero';
import Skills from './components/Sections/Skills';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import Education from './components/Sections/Education';

function App() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Education />
    </Layout>
  );
}

export default App;