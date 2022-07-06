import React from "react";
import {Route, Routes} from "react-router-dom"
import FrontPage from "./pages/FrontPage/FrontPage";
import BtsPage from "./pages/BtsPage/BtsPage";
import BlackPinkPage from "./pages/BlackPinkPage/BlackPinkPage";
import TwicePage from "./pages/TwicePage/TwicePage";

function App() {
  return (
   <Routes>
    <Route 
      path="/"
      element={<FrontPage />}
    />
    <Route 
      path="/BTS"
      element={<BtsPage />}
    />
    <Route 
      path="/Blackpink"
      element={<BlackPinkPage />}
    />
    <Route 
      path="/Twice"
      element={<TwicePage />}
    />
   </Routes>
  );
}

export default App;
