import React from "react";
import { motion } from "framer-motion";
import Contact from "./Contact";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Contact />
      <div className="contact">
        <h3 className="git">Get in Touch</h3>
        <ul className="contactlist">
          <li>
            <motion.i
              whileHover={{ scale: 1.2 }}
              className="fa-solid fa-phone fa-2xs"
            ></motion.i>
            <span> +1 773-977-5097</span>
          </li>
          <li>
            <motion.i
              whileHover={{ scale: 1.2 }}
              className="fa-solid fa-envelope fa-xs"
            ></motion.i>
            <span> yvuddula@hawk.iit.edu</span>
          </li>
          <li>
            <motion.i
              whileHover={{ scale: 1.2 }}
              className="fa-solid fa-envelope fa-xs"
            ></motion.i>
            <span> yesh2u@gmail.com</span>
          </li>
          <li>
            <motion.i
              whileHover={{ scale: 1.2 }}
              className="fa-solid fa-2xs fa-location-dot"
            ></motion.i>
            <span> Chicago, IL</span>
            <br />
          </li>
        </ul>
        <div className="coniconslist">
          <a href="https://www.linkedin.com/in/yeswanth-sai-vuddula-a69673b7">
            <motion.i
              whileHover={{ scale: 1.2 }}
              className="conicons fa-brands fa-linkedin fa-lg"
            ></motion.i>
          </a>
          <a href="https://github.com/yeswanth12345">
            <motion.i
              whileHover={{ scale: 1.2 }}
              className="conicons fa-brands fa-github fa-lg"
            ></motion.i>
          </a>
          <a href="mailto: yvuddula@hawk.iit.edu">
            <motion.i
              whileHover={{ scale: 1.2 }}
              className="conicons fa-solid fa-envelope fa-lg"
            ></motion.i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
