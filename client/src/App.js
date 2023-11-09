import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import theme from './theme/coustomTheme'
import Card from "./components/Card/Card";
import { ThemeProvider } from '@mui/material/styles'
const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme} >
        <Navbar />
        <Card />
        {/* <Header />
        <Footer /> */}
      </ThemeProvider>
    </div>
  )
}

export default App;
