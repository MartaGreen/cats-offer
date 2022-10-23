import React from "react";
import styles from "./App.style";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux";

import Index from "../../pages/Index/Index";
import Cart from "../../pages/Cart/Cart";
import Admin from "../../pages/Admin/Admin";

function App() {
  const classes = styles();

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
