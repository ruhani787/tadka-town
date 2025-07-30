import React from "react";
import '../styles/Review.css'

export default function TestimonialSection() {
  return (
    <section className="testimonial">
      <div className="overlay">
        <p className="subtitle">OUR CUSTOMER REVIEW</p>
        <h2 className="title">
          What Our Client Says 
        </h2>

        <div className="review-card">
          <div className="stars">★★★★★</div>
          <p className="review-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam."
          </p>
          <p className="author">Jackson Dean</p>
          <p className="role">Guest</p>
        </div>
      </div>
    </section>
  );
}