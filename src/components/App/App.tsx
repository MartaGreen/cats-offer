import React from "react";
import styles from "./App.style";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "../../pages/Index/Index";

function App() {
  const classes = styles();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
