import React from "react";
import humanface from './humanface.jpeg'
import Resume from './Resume.pdf'
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
import sqlserver from './icons/sqlserver.png';
import tableau from './icons/tableau.png';

function Aboutme(){
    return(
        <div className="aboutme">
            <h4>About Me</h4>
            <div className="aboutmecard">
                <div className="card1">
                    <div className="card1img">
                        <img className="myimage" src={humanface}></img>
                    </div>
                    {/* <div className="card1desc">
                        <ul>
                            <p>Name : Yeswanth sai Vuddula</p>
                            <p>Profile : Software Engineer . Data Analyst</p>
                            <p>Email : yvuddula@hawk.iit.edu</p>
                            <p>Current Location : Chicago, Illinois</p>
                            <button type="button" onClick={()=>{window.open(Resume)}} className="btn btn-sm resumebtn">View Resume</button>
                        </ul>
                    </div> */}
                </div>
                <div className="card2">
                    <h5>Hello, I'm Yeswanth sai Vuddula</h5>
                    <h6>
                    An aspiring data analyst/engineer with over 1 year of work experience on multiple technologies with expertise on Python, R, SQL, statistical analysis, predictive modeling, data visualization, and databases (MySQL, Microsoft & Oracle SQL Server), with excellent problem-solving, communicating, analyzing and programming skills.
                    </h6>
                    <ul>
                    <button type="button" onClick={()=>{window.open(Resume)}} className="btn btn-sm resumebtn">View Resume</button> 
                    </ul>
                </div>
            </div>
            <div className="skills">
                <h5>Skills</h5><br/>
                <div className="skill-imgs">
                    <img className="skill-img" src={aws}/>
                    <img className="skill-img" src={azure}/>
                    <img className="skill-img" src={css}/>
                    <img className="skill-img" src={html}/>
                    <img className="skill-img" src={excel}/>
                    <img className="skill-img" src={git}/>
                    <img className="skill-img" src={hadoop}/>
                    <img className="skill-img" src={java}/>
                    <img className="skill-img" src={mysql}/>
                    <img className="skill-img" src={powerbi}/>
                    <img className="skill-img" src={python}/>
                    <img className="skill-img" src={r}/>
                    <img className="skill-img" src={react}/>
                    {/* <img className="skill-img" src={sqlserver}/> */}
                    <img className="skill-img" src={tableau}/>
                </div>
            </div>
        </div>
    )
}

export default Aboutme;