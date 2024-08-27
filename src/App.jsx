import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas,DesignTeam} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />
        <Works />
        <DesignTeam />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <Feedbacks />
        </div>
      </div>
    </BrowserRouter>
  );

  }
export default App;