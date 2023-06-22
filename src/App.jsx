import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Donate from './pages/Donate';
import DonationList from './pages/DonationList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar />
     <Routes>
      <Route
            path="/"
            element={
             <Home />
            }
          />

     <Route path="/home" element={
                <Home />
          } />
     <Route path="/donation-list" element={
                <DonationList />
          } />
<Route path="/donate/:slug" element={
            <Donate />
            }  />
     </Routes>
     <Footer />
    </>
  )
}

export default App
