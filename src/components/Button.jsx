

import { useContext } from 'react';
import '../App.css'; // Archivo de estilos CSS
import backgroundContext from '../themes/ThemeContext';



const Button = () => {
    const context = useContext(backgroundContext)
    console.log(context)
    return (
        <div >

            <button onClick={context.changeTheme}>Change Theme</button>


        </div>
    );
};

export default Button;
