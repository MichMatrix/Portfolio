import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ThankYou } from "./components";

const App = () => {
  return (
    <Router>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>
        <Routes>
          <Route path="/Portfolio/thank-you" element={<div className="relative my-1"><ThankYou /> <StarsCanvas />
            </div>} />
          <Route path="/Portfolio/" element={<div>
            <Hero />
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
            <div className='relative z-0'>
              <Contact />
              <StarsCanvas />
            </div>
          </div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
