import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./assets/component/navbar/Navbar";
import Hero from "./assets/component/navbar/hero/Hero";
import Friends from "./assets/component/navbar/friends/Friends";
import Timeline from "./assets/component/timeline/Timeline";
import Timelineinfo from "./assets/component/timelineinfo/Timelineinfo";
import Stats from "./assets/component/stats/Stats";
import NotFound from "./assets/component/notfound/NotFound";
import Footer from "./assets/component/navbar/footer/Footer";

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

            <Route path="/friend/:id" element={<Timeline />} />

            <Route path="/stats" element={<Stats />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </BrowserRouter>
  );
}

export default App;