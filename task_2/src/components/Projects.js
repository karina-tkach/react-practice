import React from "react";
import Button from "./Button";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.png";
import project3 from "../assets/img/project3.png";
import "../assets/css/Projects.css";

const Projects = () => {
    return (
        <section className="projects">
            <div className="projects-heading">
                <h2>View our projects</h2>
                <Button to="/projects" className="view-more" content="View more &nbsp;&nbsp;→"/>
            </div>
            <div className="project-list">
                <div className="left-project project">
                    <img src={project1} alt="Project 1" />
                    <div className="project-overlay">
                        <h3>Workhub Office Webflow Webflow Design</h3>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
                        <Button to="/project/1" className="yellow-link" content="View project &nbsp;&nbsp;→"/>
                    </div>
                </div>
                <div className="project first-project">
                    <img src={project2} alt="Project 2" />
                    <div className="project-overlay">
                        <h3>Unisaas Website Design</h3>
                        <Button to="/project/2" className="yellow-link" content="View portfolio &nbsp;&nbsp;→"/>
                    </div>
                </div>
                <div className="project second-project">
                    <img src={project3} alt="Project 3" />
                </div>
            </div>
        </section>
    );
};

export default Projects;
