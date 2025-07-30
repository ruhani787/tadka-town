import React, { useState } from "react";
import "../styles/HomePage.css"; 

export default function HeroSection() {
  const slides = [
    {
      bg: "/hotel-bg1.jpg",
      title: "A Luxurious Way To Enjoy Your Life",
      tagline: "BEST PLACE TO RELAX & ENJOY",
    },
    {
      bg: "/hotel-bg2.jpg",
      title: "Experience Royal Comfort & Luxury",
      tagline: "YOUR DREAM VACATION AWAITS",
    },
    {
      bg: "/hotel-bg3.jpg",
      title: "Relax. Refresh. Rejuvenate.",
      tagline: "ENJOY THE PERFECT STAY",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="hero-section">

      <div className="navbar">
       <div className="nav-logo">
         <img src="/logo2.png"alt="Imperal logo">
         </img>
       </div>
       <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Pages</a>
          <a href="#">Contact</a>
        </nav>
      </div>

      <div className="hero-content">
        <p>Best Place To Relax & Enjoy</p>
        <h2>A Luxurious Way To Enjoy Your Life</h2>
        <button id="discover-btn">Discover Rooms <span>&#8594;</span></button>
      </div>

      <div className="slider-arrows">
        <button className="arrow-left" onClick={prevSlide}>❮</button>
        <button className="arrow-right" onClick={nextSlide}>❯</button>
      </div>

      <div className="booking-bar">
        <div className="booking-item">
          <label>Check In</label>
          <input type="date" />
        </div>
        <div className="booking-item">
          <label>Check Out</label>
          <input type="date" />
        </div>
        <div className="booking-item">
          <label>Room</label>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        
          <button id="check-btn">Check Availability</button>
       
      </div>
    </div>
  );
}
