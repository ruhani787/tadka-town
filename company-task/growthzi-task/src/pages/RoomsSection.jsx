import React from "react";
import "../styles/RoomsSection.css";

export default function RoomsSection() {
  const rooms = [
    {
      name: "Superior Suite",
      price: "$300/night",
      img: "/img1.jpeg",
      showbtn: true,
    },
    {
      name: "Junior Suite",
      price: "$270/night",
      img: "/img2.jpg",
      showbtn: false,
    },
    {
      name: "Deluxe Room",
      price: "$210/night",
      img: "/img3.jpg",
      showbtn: false,
    },
    {
      name: "Double Room",
      price: "$180/night",
      img: "/img4.webp",
      showbtn: false,
    },
    {
      name: "Family Room",
      price: "$160/night",
      img: "/img5.jpg",
      showbtn: false,
    },
  ];

  return (
    <div className="rooms-section">
      <p className="subtitle">OUR ROOM CHOICES</p>
      <h2 className="title">Luxury Rooms & Suite</h2>

      <div className="rooms-card">
        <div className="top-row">
          {rooms.slice(0, 2).map((room, i) => {
            const originalIndex = i; 
            return (
              <div key={originalIndex} className="room large-room">
                <div
                  className="room-img"
                  style={{
                    backgroundImage: `url(${room.img})`,
                  }}
                >
                  <div className="room-info">
                    <h3>{room.name}</h3>
                    <p>{room.price}</p>
                   
                    {originalIndex === 0 && <hr className="hr" />}
                    {room.showbtn && <button id="book-btn">Book Now <span>&#8594;</span></button>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

       
        <div className="bottom-row">
          {rooms.slice(2).map((room, i) => (
            <div key={i + 2} className="room">
              <div className="room-img"
              style={{ backgroundImage: `url(${room.img})`,}}>
                <div className="room-info">
                  <h3>{room.name}</h3>
                  <p>{room.price}</p>
                
                  {room.showbtn && <button id="book-btn">Book Now</button>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
