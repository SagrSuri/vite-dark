import React, { useEffect, useState } from 'react';
import { IoMoonSharp, IoSunnySharp } from 'react-icons/io5';

const Toggle = ({
  buttonClass,
  buttonIconClass,
  lightButtonClass,
  darkButtonClass,
  lightIconClass,
  darkIconClass,
}) => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('themeMode');
    return savedMode ? JSON.parse(savedMode) : 'light';
  });

  useEffect(() => {
    const applyTheme = (theme) => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('themeMode', JSON.stringify('dark'));
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('themeMode', JSON.stringify('light'));
      }
    };

    applyTheme(mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="relative flex flex-col items-center w-auto p-2">
      <button
        onClick={toggleMode}
        className={`${buttonClass} ${mode === 'light' ? lightButtonClass : darkButtonClass}`}
        aria-label="Toggle theme mode"
      >
        {mode === 'dark' ? (
          <IoMoonSharp className={buttonIconClass} />
        ) : (
          <IoSunnySharp className={buttonIconClass} />
        )}
      </button>
    </div>
  );
};

export default Toggle;
