import React from 'react'
import { Link } from 'react-router-dom';

const ProjectTaskItem = (props) => {

    const { item, removePT } = props;

    const deleteHandeler = () =>{
        removePT(item.id)
    } 


    return (
        <div className="card mb-1 bg-light">

            <div className="card-header text-primary">
                ID: {item.id}
            </div>
            <div className="card-body bg-light">
                <h5 className="card-title">{item.summary}</h5>
                <p className="card-text text-truncate ">
                    {item.acceptanceCriteria}
                </p>
                <Link to={`/edit-project-task/${item.id}?status=${item.status}`} className="btn btn-primary">
                    View / Edit
                </Link>

                <button className="btn btn-danger ml-4" onClick={deleteHandeler}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default ProjectTaskItem;
