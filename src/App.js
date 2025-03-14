import React from "react";
import Desktop5 from "./components/Desktop5"; // ✅ Correct import path
import "./components/DesignSection.css";
import DesignSection from "./components/Design";


function App() {
  return (
    <div>
      <Desktop5 />
     <DesignSection />
   </div>
  );
}

export default App;
