import React from 'react';
import Toggle from './components/Toggle';

const App = () => {
  return (
    <div className=' h-screen bg-slate-400 dark:bg-slate-900'>
      <Toggle
        buttonClass="p-2 relative rounded-full flex flex-col w-8 h-8 m-auto justify-center item-center bg-slate-200 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 shadow-sm shadow-black dark:shadow-white"
        buttonIconClass="text-[1rem] dark:text-white"
        lightButtonClass="bg-gray-400 dark:bg-gray-800"
        darkButtonClass="bg-gray-400 dark:bg-gray-800"
        lightIconClass="text-black dark:text-white"
        darkIconClass="text-black dark:text-white"
      />
    </div>
  );
};

export default App;
