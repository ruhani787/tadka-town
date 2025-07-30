import React from "react";
import "../styles/Services.css";
export default function Services() {
  const amenities = [
    {
      title: "Workout & Yoga Rooms",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Spa, Massage & Sauna",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Multiple Cuisines & Beverages",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="amenities-section">
      <div className="heading">
        <p className="subtitle">INTRODUCING OUR SERVICES</p>
        <h2>Amenities That You Can Enjoy</h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="grid">
        {amenities.map((item, index) => (
          <div className="grid-row" key={index}>
            {index % 2 === 0 ? (
              <>
                <div className="card">
                  
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <button className="discover-btn">
                    Discover More <span>&#8594;</span>
                  </button>
                </div>
                <div className="empty-cell"></div> 
              </>
            ) : (
              <>
                <div className="empty-cell"></div> 
                <div className="card">
                 
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <button className="discover-btn">
                    Discover More <span>&#8594;</span>
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
