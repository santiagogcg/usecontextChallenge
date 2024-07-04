

import '../App.css'; // Archivo de estilos CSS
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import MyJob from '../pages/MyJob';
import Profile from '../pages/Profile';
import backgroundContext from '../themes/ThemeContext';
import { useContext } from 'react';




const Rutas = () => {
    const context = useContext(backgroundContext)
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/myjob" element={<MyJob />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Router>




        </>
    );
};

export default Rutas;
