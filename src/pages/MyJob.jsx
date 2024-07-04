

import '../App.css'; // Archivo de estilos CSS
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useContext } from 'react';
import backgroundContext from '../themes/ThemeContext';

const MyJob = () => {
    const context = useContext(backgroundContext)
    return (
        <div >

            {!context.themeDark ?
                <div className='App dark'>
                    <h1>BIENVENIDO A MY JOB</h1>
                    <Link to={'/home'}>HOME</Link>
                    <Link to={'/profile'}>MY PROFILE</Link>
                    <Button />
                </div> :
                <div className='App light'>
                    <h1>BIENVENIDO A MY JOB</h1>
                    <Link to={'/home'}>HOME</Link>
                    <Link to={'/profile'}>MY PROFILE</Link>
                    <Button />
                </div>

            }


        </div>
    );
};

export default MyJob;
