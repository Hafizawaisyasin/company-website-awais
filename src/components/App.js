import React, { useState } from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Header from "./ui/Header";
import theme from "./ui/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./LandingPage";
import Services from "./Services";
import Footer from "./ui/Footer";
import CustomSoftware from './CustomSoftware';
import MobileApps from './MobileApps';
import Website from './Website';
import Revolution from './Revolution';
import About from './About';
import Contact from './Contact';
import Estimate from './Estimate'
function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />

        <Routes>
          <Route exact path="/" element={<Home setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route exact path="/services" element={<Services setValue={setValue} setSelectedIndex={setSelectedIndex}  />} />
          <Route exact path="/customsoftware" element={<CustomSoftware setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route exact path="/mobileapps" element={<MobileApps setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route exact path="/websites" element={<Website setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route exact path="/revolution" element={<Revolution setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route exact path="/aboutus" element={<About setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route exact path="/contactus" element={<Contact setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route exact path="/estimate" element={<Estimate setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
        </Routes>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
