import React from 'react';
import TeamMember from './TeamMember';
import "../assets/css/TeamSection.css"
import ceoImage from "../assets/img/ceo.jpg";
import ctoImage from "../assets/img/cto.jpg";
import designerImage from "../assets/img/design-lead.jpg";
import managerImage from "../assets/img/project-manager.png";

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2>Meet our team</h2>
      <div className="team-container">
        <TeamMember 
          imgSrc={ceoImage} 
          altText="John Smith" 
          name="John Smith" 
          role="CEO" 
        />
        <TeamMember 
          imgSrc={ctoImage} 
          altText="Simon Adams" 
          name="Simon Adams" 
          role="CTO" 
        />
        <TeamMember 
          imgSrc={designerImage} 
          altText="Paul Jones" 
          name="Paul Jones" 
          role="Design Lead" 
        />
        <TeamMember 
          imgSrc={managerImage} 
          altText="Sara Hardin" 
          name="Sara Hardin" 
          role="Project Manager" 
        />
      </div>
    </section>
  );
};

export default TeamSection;
