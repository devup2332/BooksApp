import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const HeaderComponent = () => {
  const closeNav = (e: Event) => {
    const btn = document.querySelector(".header-btn-nav");
    const nav = document.querySelector(".header-nav");
    if (!btn?.contains(e.target as Node)) {
      nav?.classList.remove("visible");
      document.removeEventListener("click", closeNav);
    }
  };
  const openNav = () => {
    const nav = document.querySelector(".header-nav");
    nav?.classList.toggle("visible");
    document.addEventListener("click", closeNav);
  };

  useEffect(() => {
    return () => {
      //document.removeEventListener("click", closeNav);
    };
  }, []);
  return (
    <div className="header-component-container">
      <div className="header-component-subcontainer">
        <h1 className="header-logo">Bookstore</h1>
        <nav className="header-nav">
          <ul className="header-menu-options">
            <li className="header-option">Home</li>
            <li className="header-option">Top Books</li>
            <li className="header-option">Favorites</li>
          </ul>
          <button type="button">Register</button>
          <button type="button">Login</button>
        </nav>
        <button className="header-btn-nav" onClick={openNav}>
          <GiHamburgerMenu />
        </button>
        <form className="header-search-form">
          <input type="text" placeholder="Search your favorite book" />
        </form>
      </div>
    </div>
  );
};

export default HeaderComponent;
