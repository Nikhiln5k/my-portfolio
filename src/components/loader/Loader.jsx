import React from "react";
import './Loader.css'

function Loader() {
  return (
    <>
      <main
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        {/* <iframe src="https://lottie.host/embed/3f894f99-f6e9-4300-8ff8-f6d7d4dfc3dc/8Pjvfrugdb.json"></iframe> */}

        <dotlottie-player
          src="https://lottie.host/3f894f99-f6e9-4300-8ff8-f6d7d4dfc3dc/8Pjvfrugdb.json"
          speed="1"
          id='loader'
          loop
          autoplay
        ></dotlottie-player>
      </main>
    </>
  );
}

export default Loader;
