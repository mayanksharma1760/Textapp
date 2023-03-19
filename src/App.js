import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  const [mode, setmode] = useState('light')
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'rgb(7 36 74)'
      // showalert('Dark mode has been Enabled', 'success')
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      // showalert('Light mode has been Enabled', 'success')
    }
  }
  
  return (
    <>
      <Router>
        <Navbar h="Home" a="AboutUs " mode={mode} toggle={togglemode} />
        {/* <Alert /> */}
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={
              <Textform heading='Enter here to analyze' mode={mode}  />
            } />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>

          {/* <About/> */}

        </div>
      </Router>
    </>
  );
}
export default App;

