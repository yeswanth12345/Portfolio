import React from "react";
import './index.css';


function Experience(){
    const exp = [
        {
            company : "Cognizant",
            role : "Data Analyst",
            d1 : " Worked on the DAGs (Directed Acyclic Graph) using AWS Managed Apache Airflow and code Improvement using PySpark for extraction in AWS and worked with S3 for data storage",
            d2:" Engagement with end user to rectify issues related to data and backtracking in AWS Athena, also in EMR for better results",
            d3:"Collected data from different clients running through MySQL Commands, transformed data, loaded the data into the S3 buckets, and Triggering the DAGs",
            d4:"Generated report after the load is completed, validated reports based on previous results, visualized and tracked the incoming issues and provided solution for the issues.",
        },
        {
            company : "Cognizant",
            role : "Data Analyst Intern",
            d1 : "Collected sales data from the different teams, transformed the data by running MySQL queries, analyse the data using Python in Azure Databricks and visualize using Power BI",
            d2:"Gained knowledge on MySQL, Python, Azure Databricks, Microsoft SQL Server, Linux",
        },
        {
            company : "Evolet Technologies",
            role : "Java Developer Intern",
            d1 : "Developed an Online Exam portal with a team of 4 for the school using HTML/CSS, JSP and Java.",
            d2:"Involved in the software development life cycle including design, development, and testing.",
        },
    ]

   const expcomponents = exp.map((item)=>{
        return(
            <div className="exp-item">
                <h6>{item.company}</h6>
                <h6>{item.role}</h6>
                <ul>
                    <li>
                        {item.d1}
                    </li>
                    <li>
                        {item.d2}
                    </li>
                    {item.d3&&
                    <li>
                        {item.d3}
                    </li>
                    }
                    {item.d4&&
                    <li>
                        {item.d4}
                    </li>
                    }
                </ul>
            </div>
        )
    })

    return(
        <div className="experience">
            <h3>Experience</h3>
            {expcomponents}
        </div>
    )
}

export default Experience;