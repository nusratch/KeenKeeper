import { useState } from 'react'
import React from "react";
import './App.css'
import Navbar from "./assets/component/navbar/Navbar";
import Hero from "./assets/component/navbar/hero/Hero";
import Friends from "./assets/component/navbar/friends/Friends";
import Footer from "./assets/component/navbar/footer/Footer";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero/>
      <Friends />
       <Footer/>
      <ToastContainer />
    </>
  )
}

export default App