import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import ProjectTaskItem from './projectTask/ProjectTaskItem';

import ProjectTaskContext from '../context/ProjectTaskContext/ProjectTaskContext';

const ProjectBoard = () =>{

    const projectTaskContext = useContext(ProjectTaskContext);
    const { projectTasks, getAllPTs, removePT } = projectTaskContext;

    useEffect(() => {
        getAllPTs();
    }, []);


    return (
        <div className="container">
            <Link to="/add-project-task" className="btn btn-primary mb-3">
                <i className="fas fa-plus-circle"> Create Project Task</i>
            </Link>
            <br />
            <hr />
            {/* <!-- Backlog STARTS HERE --> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-secondary text-white">
                                <h3>TO DO</h3>
                            </div>
                        </div>

                        {/* <!-- SAMPLE PROJECT TASK STARTS HERE --> */}
                        
                        {
                            projectTasks.filter(pt => pt.status == "TO_DO").map(pTask =>
                                <ProjectTaskItem key={pTask.id} item={pTask} removePT={removePT} />                                
                            )
                        }


                        {/* <!-- SAMPLE PROJECT TASK ENDS HERE --> */}
                    </div>
                    
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-primary text-white">
                                <h3>In Progress</h3>
                            </div>
                        </div>
                        {/* <!-- SAMPLE PROJECT TASK STARTS HERE --> */}

                        {
                            projectTasks.filter(pt => pt.status == "IN_PROGRESS").map(pTask =>
                                <ProjectTaskItem key={pTask.id} item={pTask} removePT={removePT} />                                
                            )
                        }

                        {/* <!-- SAMPLE PROJECT TASK ENDS HERE --> */}
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-success text-white">
                                <h3>Done</h3>
                            </div>
                        </div>
                        {/* <!-- SAMPLE PROJECT TASK STARTS HERE --> */}

                        {
                            projectTasks.filter(pt => pt.status == "DONE").map(pTask =>
                                <ProjectTaskItem key={pTask.id} item={pTask} removePT={removePT} />                                
                            )
                        }

                        {/* <!-- SAMPLE PROJECT TASK ENDS HERE --> */}
                    </div>
            </div>
        </div>

            {/* <!-- Backlog ENDS HERE --> */}
    </div>
    )
}

export default ProjectBoard;