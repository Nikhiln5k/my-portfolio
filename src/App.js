import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import AllProjects from "./pages/allprojects/AllProjects";
import Loader from "./components/loader/Loader";

function App() {
  // const [loader, setLoader] = useState(true);
  const [loader, setLoader] = useState(false);
  const location = useLocation();
  // useEffect(() => {
  //   setLoader(true)
  //   const load = () => {
  //     setTimeout(() => {
  //       setLoader(false);
  //     }, 1500);
  //   };
  //   load();
  // }, [location]);
  useEffect(() => {
    setLoader(true);
    // hide loader on next paint (route rendered)
    const frame = requestAnimationFrame(() => {
      setLoader(false);
    });
    return () => cancelAnimationFrame(frame);
    // const handleLoad = () => {
    //   setLoader(false);
    // };
    // window.addEventListener("load", handleLoad);
    // return () => window.removeEventListener("load", handleLoad);
  }, [location]);
  return (
    <div className="App">
      {loader ? (
        <Loader /> || "Loading..."
      ) : (
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
