import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <h1>AcademiaX</h1>
      <Footer />
    </div>
  )
}

export default App;
