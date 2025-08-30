import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import orbital from '../assets/company/orbitaluw.jpeg';

const DesignTeam = () => {
  const projects = [
    {
      title: "Orbital",
      description: "UW Orbital is a student design team at the University of Waterloo participating in the Canadian Satellite Design Challenge (CSDC) - a competition that involves a dozen universities from across Canada and runs every two years. Teams design a 3U CubeSats with unique missions and payloads, and attempt to pass launch readiness evaluations such as vibration testing",
      link: "https://docs.google.com/document/d/1Ks49V60jyiaFGFwU-vdbLEys1EEimR-iHJfKc306dfk/edit?usp=sharing",
      image: orbital
    },
    // Add more projects as needed
  ];

  return (
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Design Team</p>
      <h2 className={styles.sectionHeadText}>Projects</h2>
      <div className="projects-list" style={{ marginTop: "20px", justifyContent: 'center', display: 'flex' }}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-item" 
            style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center", 
              marginBottom: "20px" 
            }}>
            
            <div style={{ flex: 1 }}>
              <h3 style={{fontSize: 24}} className="rounded-2xl font-bold ">{project.title}</h3>
              <p className="text-secondary " style={{maxWidth: 700}}>{project.description}</p>
            </div>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              marginLeft: "60px", 
              textAlign: "center" ,
              justifyContent: 'center',
            
            }}>
              <img 
                src={project.image} 
                alt={project.title} 
                style={{ width: 400, height: 200, objectFit: 'cover', marginBottom: '10px', }} 
              />
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="learn-more font-bold round-2xl" 
                style={{ textAlign: "center", color: "white", textDecoration: "none" }}>
                My Work
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default SectionWrapper(DesignTeam, 'designteam');
