import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import AllProjects from "./pages/allprojects/AllProjects";
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
        <Loader /> || "Loading..."
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
