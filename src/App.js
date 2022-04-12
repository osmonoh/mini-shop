import React from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import "./style/App.scss";

const App = () => {
  return (
    <div className="App container">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
