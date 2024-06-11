
import React from 'react';
import { Link } from 'react-router-dom';

const Task=()=>{
  return <div className="indicard">
    <div className="card" style={{width: "18rem"}}>
 
  <div className="card-body">
    <h5 className="card-title">Company Name</h5>
    <p className="card-text">The contacting persons details would come .</p>
    <Link to="/responseform" className="btn btn-primary">
            Fill the Company Response
          </Link>
  </div>
</div>
  </div>
}
export  default Task;