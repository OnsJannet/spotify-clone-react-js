import React from "react";
import Index  from "./Pages/index";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


 function App() {
  return (
    <Router>        
      <Routes>
        <Route path='/' exact element={<Index/>} /> 
      </Routes>
    </Router>
 );
}
export default App;