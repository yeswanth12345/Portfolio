import React from "react";
import OD from './OD.jpg';
import DDD from './DDD.jpg';
import LMS from './LMS.jpg'

function Projects(){
    return(
        <div className="projects">
            <h3>Projects</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4 cards">
                <div className="col">
                    <div className="card h-100">
                    <img src={OD} className="card-img-top proimg"/>
                    <div className="card-body">
                        <h6 className="card-title">Sorting and Searching System</h6>
                        <p class="card-text">Implemented all sorting and searching algorithms with the User Interface which sorts all kinds of data type and gives output with sorted list, element searching and total counts.          
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src={DDD} className="card-img-top proimg"/>
                    <div className="card-body">
                        <h6 className="card-title">Banking Product recommendation</h6>
                        <p class="card-text">The objective of this project is to create a machine learning-based solution leveraging past customer data to give Santander Bank with individualized product recommendations. It also enables us to answer the following intriguing queries regarding user behavior..
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src={LMS} className="card-img-top proimg"/>
                    <div className="card-body">
                        <h6 className="card-title">COVID Symptoms Analyser</h6>
                        <p class="card-text">
                         Developed a GUI based Application using Python library Tkinter to populate no. of symptoms for the individual to select in the application and based on the count (Severity) in the form of text the individual will understand either to take medication at home or to visit the hospital mandatorily.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;