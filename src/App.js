import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";

function App() {
  const [loader, setLoader] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setLoader(true)
    const load = () => {
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    };
    load();
  }, [location]);
  return (
    <div className="App">
      {loader ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
