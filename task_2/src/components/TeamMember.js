import React from 'react';
import "../assets/css/TeamMember.css"

const TeamMember = ({ imgSrc, altText, name, role }) => (
  <div className="team-member">
    <img src={imgSrc} alt={altText} />
    <h3>{name}</h3>
    <p>{role}</p>
  </div>
);

export default TeamMember;
