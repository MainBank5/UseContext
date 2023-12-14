import Home from './Pages/Home';
import Profile from './Pages/Profile';
import About from './Pages/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import './App.css'
import { useState, createContext } from 'react';

export const AppContext = createContext() //create the variable for context. this will store the context functionlites 


function App() {
  const [username, setUsername] = useState("Eliud")
 
  return (
    <>
    <AppContext.Provider value= {{username, setUsername}}> {/* now wrap the components you want to have access to the values */}
     <Router>
      <Navbar/>
      <Routes>
        <Route path = "/" element= {<Home/>}/>
        <Route path = "/about" element= {<About/>}/>
        <Route path = "/profile" element= {<Profile/>}/>
        <Route path = "*" element= {<h1>Page Not Found</h1>}/>
      </Routes>
     </Router>
     </AppContext.Provider>
    </>
  );
}

export default App
