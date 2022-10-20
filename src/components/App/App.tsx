import React from "react";
import styles from "./App.style";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux";

import Index from "../../pages/Index/Index";
import Cart from "../../pages/Cart/Cart";

function App() {
  const classes = styles();

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
