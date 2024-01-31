import { Container } from 'react-bootstrap'
import Exchange from '../src/components/Exchange'
import './App.css'
import Tale from './components/Tale'
import Navbar from './components/Navbar'
import Toolsmain from './components/Toolsmain'
import Download from './components/Download'
import Footer from './components/Footer'
import Banner from './components/Banner'

function App() {


  return (
    <>
      <Navbar />
      <Container>
        
        <Banner/> 
        <Exchange/>
      </Container>
    
    <Container>
      <div className='my-5'>
        <h1 className='mt-5 text-center'>Exchange Rates</h1>
        <p className='text-center mb-5 mt-4'>Standared value 1$ (USD)</p>
        <Tale/>
      </div>
      <div className='my-5'>
        <h1 className='my-5 text-center'>Tools</h1>
        <Toolsmain/>
      </div>
      <div className='my-5'><Download/></div>
      <div className='my-5'><Footer/></div>
      
      </Container>
    
    </>
  )
}

export default App
