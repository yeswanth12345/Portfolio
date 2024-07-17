import React from "react";
import { motion } from "framer-motion";
import './index.css';

function Experience(){
    const exp = [
        {
            company : "Cognizant",
            role : "Data Analyst/Engineer",
            d1 : "Developed and optimized Directed Acyclic Graphs (DAGs) using AWS Managed Apache Airflow, significantly improving workflow automation and data processing efficiency.",
            d2:"Enhanced data extraction processes by 20% through the use of PySpark, ensuring secure and efficient storage of large datasets in AWS S3.",
            d3:"Collaborated with end-users to resolve complex data-related issues using AWS Athena and EMR, improving data accuracy and system reliability.",
            d4:"Collected, transformed, and loaded data using MySQL commands, effectively managing data pipelines and ensuring seamless integration by storing processed data in S3 buckets and triggering DAGs.",
            d5:"Generated, validated, and visualized detailed reports, promptly tracking and resolving data issues, thereby facilitating informed decision-making for stakeholders.",
        },
        {
            company : "Cognizant",
            role : "Data Analyst Intern",
            d1 : "Collected and transformed data from multiple teams using MySQL queries and Python in Azure Databricks, ensuring data integrity and consistency.",
            d2: "Created dynamic visualizations and dashboards in Power BI, delivering actionable insights to stakeholders and enhancing decision-making processes.",
            d3: "Collaborated with cross-functional teams to identify data requirements and troubleshoot data-related issues, contributing to project success.",
            d4: "Gained hands-on experience with MySQL, Python, Azure Databricks, Microsoft SQL Server, and Linux, strengthening my technical and analytical skills."
        },  
        {
            company : "Evolet Technologies",
            role : "Java Developer Intern",
            d1 : "Developed an Online Exam portal using HTML/CSS, JSP, and Java as part of a team of four.",
            d2:"Reduced exam setup time by 30% through efficient design and implementation.",
            d3:"Involved in all phases of the software development life cycle, including design, development, and testing."
        },
    ];

    const expComponents = exp.map((item, index) => {
        return (
            <motion.div
                key={index}
                className="exp-item"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
            >
                <h6>{item.company}</h6>
                <h6>{item.role}</h6>
                <ul>
                    <li>{item.d1}</li>
                    <li>{item.d2}</li>
                    {item.d3 && <li>{item.d3}</li>}
                    {item.d4 && <li>{item.d4}</li>}
                    {item.d5 && <li>{item.d5}</li>}
                </ul>
            </motion.div>
        );
    });

    return (
        <div className="experience">
            <h3>Experience</h3>
            {expComponents}
        </div>
    );
}

export default Experience;
