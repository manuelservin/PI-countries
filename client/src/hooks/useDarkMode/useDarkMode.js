import { useState, useEffect } from 'react'

 const useDarkMode = () => {
  const [ theme, setTheme ] = useState('light');
 //almaceno en el localStorage para no perder el state al recargar la pagina
  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  }

  const toggleTheme = () => {
    theme === 'dark' ? setMode('light') : setMode('dark');
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme ? setTheme(localTheme) : setMode('dark');
  }, []);

  //retorno la variable de estado y la funcion que realiza el toggle al tema
  
  return [ theme, toggleTheme ];
}

export default useDarkMode;