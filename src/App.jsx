import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, StarsCanvas } from './components';



const App = () => {


  return (
    <BrowserRouter>
      <div className='relative z-o bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>


        </div>
      </div>
    </BrowserRouter>
    
  )
}

export default App
