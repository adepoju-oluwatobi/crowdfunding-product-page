import React, { useState } from "react";
import NavIconOpen from "../assets/icon-hamburger.svg";
import NavIconClose from "../assets/icon-close-menu.svg";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isBgOverlayVisible, setIsBgOverlayVisible] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
    setIsBgOverlayVisible((prevState) => !prevState);
  };

  return (
    <div id="header-container" className={`${isNavOpen ? "menu-open" : ""}`}>
      {/* Overlay background */}
      {isBgOverlayVisible && (
        <div
          className="absolute h-[100vh] w-[100%] bg-black bg-opacity-50"
          onClick={toggleNav} // Close the menu when clicking on the overlay
        />
      )}

      <div className="bg-[url(./assets/image-hero-mobile.jpg)]  bg-no-repeat bg-cover h-[40vh] p-6">
        <div className="flex items-center justify-between">
          <p className="text-white font-bold">CROWDFUND</p>
          <div className="cursor-pointer" onClick={toggleNav}>
            <img
              className={`w-4 h-4 ${isNavOpen ? "hidden" : ""}`}
              src={NavIconOpen}
              alt=""
              id="open-icon"
            />
            <img
              className={`w-4 h-4 ${isNavOpen ? "" : "hidden"}`}
              src={NavIconClose}
              alt=""
              id="close-icon"
            />
          </div>
        </div>
        {/* Show navigation menu based on the state */}
        {isNavOpen && (
          <div className="relative">
            <div className="navigation-menu bg-white mt-8 p-4 rounded-xl z-[999] relative">
              {/* Add your navigation links and other content here */}
              <div className="flex flex-col gap-3">
                <p className="border-b p-4 font-bold">About</p>
                <p className="border-b p-4 font-bold">Discover</p>
                <p className=" p-4 font-bold">Get Started</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
