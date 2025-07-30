import React from "react";
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
             <img src="logo2.png" alt="" />
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

       
        <div className="footer-links">
          <h3>USEFUL LINKS</h3>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICE</li>
            <li>ROOM</li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>SUBSCRIBE</h3>
          <p>
            Don't miss to subscribe our news, kindly fill the form below
          </p>
          <div className="subscribe-box">
            <input type="email" placeholder="Your Email Here" />
            <button>&#10148;</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
         <p className="desc">© 2025 Imperial Grand Hotel. All Rights Reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
      </div>
    </footer>
  );
}