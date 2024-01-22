import React from "react";
import Contact from "./Contact";

function Footer(){
    return(
        <div className="footer">
            <Contact/>
            <div className="contact">
                <h3 className="git">Get in Touch</h3>
                <ul className="contactlist">                  
                    <li>
                        <i class="fa-solid fa-phone fa-2xs"></i>
                        <span> +1 773-977-5097</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-envelope fa-xs"></i>
                        <span> yvuddula@hawk.iit.edu</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-envelope fa-xs"></i>
                        <span> yesh2u@gmail.com</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-2xs fa-location-dot"></i>
                        <span> Chicago, IL</span><br/>
                    </li>
                </ul>
                <div className="coniconslist">
                    <a href="https://www.linkedin.com/in/yeswanth-sai-vuddula-a69673b7"><i class="conicons fa-brands fa-linkedin fa-lg"></i></a>
                    <a href="https://github.com/yeswanth12345"><i class="conicons fa-brands fa-github fa-lg"></i></a>
                    <a href="mailto: yvuddula@hawk.iit.edu"><i class="conicons fa-solid fa-envelope fa-lg"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;