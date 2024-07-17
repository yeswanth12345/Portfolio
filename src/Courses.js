import React from "react";
import { motion } from "framer-motion";
import AP from './AP.png';
import AZ from './AZ.png';
import WA from './WA.png';
import DBE from './DBE.png';
import SDS from './SDS.png';
import PSFA from './PSFA.png';

const Courses = () => {
    const variants = {
        hovered: {
            scale: 1.15,
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

    return (
        <div className="courses">
            <h3>Courses and Certifications</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4 cards">
                <div className="col">
                    <motion.div
                        className="card h-100"
                        whileHover="hovered"
                        whileTap="notHovered"
                        variants={variants}
                    >
                        <img src={DBE} className="card-img-top" alt="Database Management Essentials" />
                        <div className="card-body">
                            <h6 className="card-title">Database Management Essentials</h6>
                        </div>
                    </motion.div>
                </div>
                <div className="col">
                    <motion.div
                        className="card h-100"
                        whileHover="hovered"
                        whileTap="notHovered"
                        variants={variants}
                    >
                        <img src={SDS} className="card-img-top" alt="SQL for Data Science" />
                        <div className="card-body">
                            <h6 className="card-title">SQL for Data Science</h6>
                        </div>
                    </motion.div>
                </div>
                <div className="col">
                    <motion.div
                        className="card h-100"
                        whileHover="hovered"
                        whileTap="notHovered"
                        variants={variants}
                    >
                        <img src={PSFA} className="card-img-top" alt="Python and Statistics for financial analysis" />
                        <div className="card-body">
                            <h6 className="card-title">Python and Statistics for financial analysis</h6>
                        </div>
                    </motion.div>
                </div>
                <div className="col">
                    <motion.div
                        className="card h-100"
                        whileHover="hovered"
                        whileTap="notHovered"
                        variants={variants}
                    >
                        <img src={AP} className="card-img-top" alt="Advanced Python" />
                        <div className="card-body">
                            <h6 className="card-title">Advanced Python</h6>
                        </div>
                    </motion.div>
                </div>
                <div className="col">
                    <motion.div
                        className="card h-100"
                        whileHover="hovered"
                        whileTap="notHovered"
                        variants={variants}
                    >
                        <img src={AZ} className="card-img-top" alt="Azure Databricks and Spark core for data engineers" />
                        <div className="card-body">
                            <h6 className="card-title">Azure Databricks and Spark core for data engineers</h6>
                        </div>
                    </motion.div>
                </div>
                <div className="col">
                    <motion.div
                        className="card h-100"
                        whileHover="hovered"
                        whileTap="notHovered"
                        variants={variants}
                    >
                        <img src={WA} className="card-img-top" alt="Web Analytics" />
                        <div className="card-body">
                            <h6 className="card-title">Web Analytics</h6>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
