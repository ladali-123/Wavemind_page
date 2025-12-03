import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import Solution from './components/Solution';
import DoubtForm from './components/DoubtForm';
import WhyTrustUs from './components/WhyTrustUs';
import About from './components/About';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProblemStatement />
      <Solution />
      <DoubtForm />
      <WhyTrustUs />
      <About />
      <FAQ />
      <FinalCTA />
    </div>
  );
}

export default App;
