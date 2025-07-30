import React from "react";
import '../styles/OurTeam.css'

export default function TeamSection() {
  const team = [
    {
      name: "Laurent Wayne",
      work: "Hotel Manager",
      img: "/", 
    },
    {
      name: "Josh Mullins",
      work: "Kitchen Manager",
      img: "/",
    },
    {
      name: "Andrea Hugh",
      work: "Receptionist",
      img: "/",
    },
    {
      name: "James Norman",
      work: "Room Service",
      img: "/",
    },
  ];

  return (
    <section className="team-section">
      <p className="subtitles">MEET OUR TEAM</p>
      <h2 className="titles">Expert Team Persons</h2>

      <div className="team-grid">
        {team.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="image-container">
              <img src={member.img} alt={member.name} />
              <div className="overlay">
              </div>
            </div>
            <h3>{member.name}</h3>
            <p className="work">{member.work}</p>
          </div>
        ))}
      </div>
    </section>
  );
}