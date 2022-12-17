import React from 'react';
import './App.scss';
import  {Route, Routes} from "react-router-dom";
import {GamePage} from "./pages/game";
import {WelcomePage} from "./pages/welcome";

function App() {
  
  return (
      <Routes>
        <Route path='*' element={<WelcomePage/>}/>
        <Route path='wordle' element={<GamePage/>}/>
      </Routes>



    
    
  );
}

export default App;
