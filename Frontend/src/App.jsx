import LandingPage from './pages/Landingpage'
import LinkEntryPage from './pages/LinkEntrypage'
import LoginPage from './pages/LoginPage'
import Signuppage from './pages/Signuppage'
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom"
import './App.css'
import Aboutpage from './pages/Aboutpage'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<Signuppage/>}/>
        <Route path='/about' element={<Aboutpage/>}/>
      </Routes>
    </Router>
    {/* <LinkEntryPage/> */}
    
    </>
  )
}

export default App
