import {Routes, Route} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar"
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Notes from './components/notes/Notes';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Admin from './components/admin/Admin';
import Login from './components/login/Login';
import Register from './components/login/Register';
import { useState } from 'react';

function App() {
    const [showLogin, setShowLogin] = useState(true);
    function toggleLogin(showLogin) {
        setShowLogin(showLogin);
    }
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/notes" element={<Notes/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/admin" element={<Admin/>} />
                {showLogin ? <Route path="/login" element={<Login loginToggleHandler={toggleLogin}/>}/> : <Route path="/register" element={<Register loginToggleHandler={toggleLogin}/>}/>}
            </Routes>
        </div>
    );
}

export default App
