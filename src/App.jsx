import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./assets/component/navbar/Navbar";
import Hero from "./assets/component/navbar/hero/Hero";
import Friends from "./assets/component/navbar/friends/Friends";
import Timelineinfo from "./assets/component/timelineinfo/Timelineinfo";
import Footer from "./assets/component/navbar/footer/Footer";
import Stats from "./assets/component/stats/Stats";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Friends />
                </>
              }
            />

            <Route path="/timeline" element={<Timelineinfo />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </div>

        <Footer />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;