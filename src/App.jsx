import { Link } from 'react-router-dom'
import SiteRoutes from './SiteRoutes'
import Navbar from './components/Navbar'
import './index.css'





function App() {


  return (
    <>
      <Navbar />
      <br />
      <div className='container'>
        <div className='col-sm-12'>
          <SiteRoutes />
        </div>
        <hr />
       

       
       
      </div>

    </>
  )
}

export default App
