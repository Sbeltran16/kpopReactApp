import React from "react";
import {Route, Routes} from "react-router-dom"
import FrontPage from "./pages/FrontPage/FrontPage";
import BtsPage from "./pages/BtsPage/BtsPage";

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
   </Routes>
  );
}

export default App;
