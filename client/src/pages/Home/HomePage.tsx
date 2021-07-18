import React, { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.body.classList.add("light__theme");
  }, []);

  return (
  <div className="home-page-container">
    <h1>home</h1>
  </div>
  );
};

export default HomePage;
