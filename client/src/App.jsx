import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import AppContext from "./utils/context"
import Login from "./pages/Login"
import Cleaning from './pages/Cleaning'
import Ac from "./pages/Ac"
import Carpenter from "./pages/Carpenter"

const App = () => {

  return (
    <BrowserRouter>  
        <AppContext>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cleaning' element={<Cleaning />} />
            <Route path='/ac' element={<Ac />} />
            <Route path='/carpenter' element={<Carpenter />} />

        </Routes>  
        </AppContext> 
    </BrowserRouter>
   
  )
}

export default App
