import './App.css'; // Archivo de estilos CSS
import Rutas from './routes/RoutesApp';

import React, { useState } from 'react';
import { backgroundContext } from './themes/ThemeContext';

const App = () => {

  const [themeDark, setThemeDark] = useState(true)

  const changeTheme = () => {
    setThemeDark(!themeDark)

  }
  return (
    <div className='App'>
      <backgroundContext.Provider value={{ themeDark, setThemeDark, changeTheme }}>

        <Rutas />


      </backgroundContext.Provider>


    </div>
  );
};

export default App;
