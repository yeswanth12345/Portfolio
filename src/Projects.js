import React from "react";
import { motion } from "framer-motion";
import OD from './OD.jpg';
import DDD from './DDD.jpg';
import LMS from './LMS.jpg';
import blog from './blog.jpg';
import CCP from './CCP.jpg';
import RIDE from './RIDE.jpg';

function Projects(){
    return(
        <div className="projects">
            <h3>Projects</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4 cards">
                <div className="col">
                    <motion.div className="card h-100" whileHover={{ scale: 1.065 }}>
                        <img src={RIDE} className="card-img-top proimg" alt="Ridesharing App"/>
                        <div className="card-body">
                            <h6 className="card-title">Ridesharing App for Demand Prediction and Optimized ETAs</h6>
                            <p className="card-text">Developed a ridesharing application using React JavaScript, MongoDB, HTML, CSS, and Firebase for authentication. Implemented AI and ML models to predict rider demand and improve ETA accuracy by analyzing historical ride patterns, weather conditions, and local events. Optimized driver allocation, reducing wait times and enhancing user satisfaction, setting new standards for efficiency and reliability.</p>
                        </div>
                    </motion.div>
                </div>
                <div className="col">
                    <motion.div className="card h-100" whileHover={{ scale: 1.065 }}>
                        <img src={CCP} className="card-img-top proimg" alt="Customer Churn Prediction"/>
                        <div className="card-body">
                            <h6 className="card-title">Customer churn prediction on sparkify dataset</h6>
                            <p className="card-text">Predicted customer churn using the Sparkify Dataset (small dataset - 128 MB & complete dataset - 12 GB). Analyzed data using Spark DataFrame, Spark SQL, and Spark ML API with PySpark. Deployed a Spark cluster on AWS and visualized insights with Tableau.</p>
                        </div>
                    </motion.div>
                </div>
                <div className="col">
                    <motion.div className="card h-100" whileHover={{ scale: 1.065 }}>
                        <img src={blog} className="card-img-top proimg" alt="Blogging App"/>
                        <div className="card-body">
                            <h6 className="card-title">InteractBlog - A Blogging App</h6>
                            <p className="card-text">Blogging Application is designed to cater to both content creators and readers, offering features like real-time updates, AI-generated content, and efficient data management. It aims to provide a seamless and engaging blogging experience while leveraging modern technologies for enhanced functionality and user satisfaction. It is powered by React, Node.js and Elasticsearch, OpenAI's API, designed with Socket.io for instant notifications, it offers a responsive and scalable platform for modern blogging experiences.</p>
                        </div>
                    </motion.div>
                </div>
                <div className="col">
                    <motion.div className="card h-100" whileHover={{ scale: 1.065 }}>
                        <img src={DDD} className="card-img-top proimg" alt="Banking Product Recommendation"/>
                        <div className="card-body">
                            <h6 className="card-title">Banking Product recommendation</h6>
                            <p className="card-text">The objective of this project is to create a machine learning-based solution leveraging past customer data to give Santander Bank with individualized product recommendations. It also enables us to answer the following intriguing queries regarding user behavior.</p>
                        </div>
                    </motion.div>
                </div>
                <div className="col">
                    <motion.div className="card h-100" whileHover={{ scale: 1.065 }}>
                        <img src={OD} className="card-img-top proimg" alt="Sorting and Searching System"/>
                        <div className="card-body">
                            <h6 className="card-title">Sorting and Searching System</h6>
                            <p className="card-text">Implemented all sorting and searching algorithms with the User Interface which sorts all kinds of data type and gives output with sorted list, element searching and total counts.</p>
                        </div>
                    </motion.div>
                </div>
                <div className="col">
                    <motion.div className="card h-100" whileHover={{ scale: 1.065 }}>
                        <img src={LMS} className="card-img-top proimg" alt="COVID Symptoms Analyzer"/>
                        <div className="card-body">
                            <h6 className="card-title">COVID Symptoms Analyser</h6>
                            <p className="card-text">Developed a GUI based Application using Python library Tkinter to populate no. of symptoms for the individual to select in the application and based on the count (Severity) in the form of text the individual will understand either to take medication at home or to visit the hospital mandatorily.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
