import React, { useState } from "react";
import { motion } from "framer-motion";
import humanface from './humanface.jpeg';
import Resume from './Resume.pdf';
import aws from './icons/aws.png';
import azure from './icons/azure.png';
import css from './icons/css.png';
import html from './icons/html.png';
import excel from './icons/excel.png';
import git from './icons/git.png';
import hadoop from './icons/hadoop.jpg';
import java from './icons/Java.png';
import mysql from './icons/mysql.png';
import powerbi from './icons/Power-BI.png';
import python from './icons/python.png';
import r from './icons/R_logo.png';
import react from './icons/react.jpg';
import tableau from './icons/tableau.png';

const Aboutme = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const variants = {
        hovered: {
            scale: 1.1,
            transition: {
                duration: 0.3,
            },
        },
        notHovered: {
            scale: 1,
            transition: {
                duration: 0.3,
            },
        },
    };

    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: isHovered ? '#f0f0f0' : '#ffffff',
    };

    return (
        <div className="aboutme">
            <h4>About Me</h4>
            <div className="aboutmecard">
                <div className="card1">
                    <div className="card1img">
                        <motion.img
                            className="myimage"
                            src={humanface}
                            whileHover={{ scale: 1.2 }}
                        />
                    </div>
                </div>
                <div className="card2">
                    <motion.h3
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        animate={isHovered ? "hovered" : "notHovered"}
                        variants={variants}
                    >
                        Hi there! 
                    </motion.h3>
                    <motion.h3
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        animate={isHovered ? "hovered" : "notHovered"}
                        variants={variants}
                    >
                        I'm Yeswanth sai Vuddula 
                    </motion.h3>
                    <h7>
                    A recently graduated student at Illinois Institute of Technology in Chicago, I bring over 1 year of professional experience as a Data Analyst/Engineer at Cognizant, along with valuable internship experiences at Cognizant and Evolet Technologies. During my undergraduate studies, I developed a robust foundation in various technologies and honed my skills in data analysis, data engineering, and software development.
                    </h7>
                    
                </div>
            </div>
            <div className="skills">
                <h5>Skills</h5><br/>
                <div className="skill-imgs">
                    <motion.img className="skill-img" src={aws} whileHover={{ scale: 1.1 }} />
                    <motion.img className="skill-img" src={azure} whileHover={{ scale: 1.1 }} />
                    <motion.img className="skill-img" src={css} whileHover={{ scale: 1.1 }} />
                    <motion.img className="skill-img" src={html} whileHover={{ scale: 1.1 }} />
                    <motion.img className="skill-img" src={excel} whileHover={{ scale: 1.1 }} />
                    <motion.img className="skill-img" src={git} whileHover={{ scale: 1.1 }} />
                    <motion.img className="skill-img" src={hadoop} whileHover={{ scale: 1.1 }} />
                    <motion.img className="skill-img" src={java} whileHover={{ scale: 1.1 }} />
                    <motion.img className="skill-img" src={mysql} whileHover={{ scale: 1.1 }} />
                    <motion.img className="skill-img" src={powerbi} whileHover={{ scale: 1.1 }} />
                    <motion.img className="skill-img" src={python} whileHover={{ scale: 1.1 }} />
                    <motion.img className="skill-img" src={r} whileHover={{ scale: 1.1 }} />
                    <motion.img className="skill-img" src={react} whileHover={{ scale: 1.1 }} />
                    <motion.img className="skill-img" src={tableau} whileHover={{ scale: 1.1 }} />
                </div>
            </div>
        </div>
    );
};

export default Aboutme;
