import React from "react";
import AP from './AP.png';
import AZ from './AZ.png';
import WA from './WA.png';
import DBE from './DBE.png';
import SDS from './SDS.png';
import PSFA from './PSFA.png'

function Courses(){
    return(
        <div className="courses">
            <h3>Courses and Certifications</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4 cards">
                <div className="col">
                    <div className="card h-100">
                    <img src={DBE} className="card-img-top"/>
                    <div className="card-body">
                        <h6 className="card-title">Database Management Essentials</h6>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src={SDS} className="card-img-top"/>
                    <div className="card-body">
                        <h6 className="card-title">SQL for Data Science</h6>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src={PSFA} className="card-img-top"/>
                    <div className="card-body">
                        <h6 className="card-title">Python and Statistics for financial analysis</h6>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src={AP} className="card-img-top"/>
                    <div className="card-body">
                        <h6 className="card-title">Advanced Python</h6>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src={AZ} className="card-img-top"/>
                    <div className="card-body">
                        <h6 className="card-title">Azure Databricks and Spark core for data engineers</h6>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src={WA} className="card-img-top"/>
                    <div className="card-body">
                        <h6 className="card-title">Web Analytics</h6>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;