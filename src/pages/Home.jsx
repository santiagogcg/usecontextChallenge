

import '../App.css'; // Archivo de estilos CSS
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import backgroundContext from '../themes/ThemeContext';

const Home = () => {
    const context = useContext(backgroundContext)
    return (

        <div >

            {!context.themeDark ?
                <div className='App dark'>
                    <h1>BIENVENIDO A HOME</h1>
                    <Link to={'/myjob'}>MY JOB</Link>
                    <Link to={'/profile'}>MY PROFILE</Link>
                    <Button />
                </div> :
                <div className='App light'>
                    <h1>BIENVENIDO A HOME</h1>
                    <Link to={'/myjob'}>MY JOB</Link>
                    <Link to={'/profile'}>MY PROFILE</Link>
                    <Button />
                </div>

            }


        </div>
    );
};

export default Home;
