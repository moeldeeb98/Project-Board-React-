import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import ProjectTastContext from '../../context/ProjectTaskContext/ProjectTaskContext';

const AddProjectTask = (props) => {
    const projectTaskContext = useContext(ProjectTastContext);
    const { addProjectTask } = projectTaskContext

    const [summary, setSummary] = useState("");
    const [acceptanceCriteria, setAcceptanceCriteria] = useState("");
    const [status, setStatus] = useState("");


    const changeSummaryHandeler = (e) => {
        setSummary(e.target.value);
    }

    const changeAcceptanceCriteriaHandeler = (e) =>{
        setAcceptanceCriteria(e.target.value);
    }

    const changeStatusHandeler = (e) => {
        setStatus(e.target.value);
    }

    const onSubmitHandeler = (e) => {
        e.preventDefault();
        const newPT = {
            "summary": summary,
            "acceptanceCriteria": acceptanceCriteria,
            "status": status
        };
        addProjectTask(newPT, props.history);
    }

    return (
        <div className="addProjectTask">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <Link to="/" className="btn btn-light">
                        Back to Board
                    </Link>
                    <h4 className="display-4 text-center">Add Project Task</h4>
                    <form onSubmit={onSubmitHandeler}>
                        
                        <div className="form-group">
                            <input type="text" name="summary"
                                className="form-control form-control-lg" 
                                placeholder="Project Task summary" 
                                value={summary}
                                required
                                onChange={changeSummaryHandeler}
                            />
                        </div>

                        <div className="form-group">
                            <textarea className="form-control form-control-lg" 
                                placeholder="Acceptance Criteria" 
                                name="acceptanceCriteria"
                                value={acceptanceCriteria}
                                required
                                onChange={changeAcceptanceCriteriaHandeler}
                                >
                            </textarea>
                        </div>

                        <div className="form-group">
                            <select className="form-control form-control-lg" 
                                name="status"
                                value={status}
                                onChange={changeStatusHandeler}
                                >
                                <option value="">Select Status</option>
                                <option value="TO_DO">TO DO</option>
                                <option value="IN_PROGRESS">IN PROGRESS</option>
                                <option value="DONE">DONE</option>
                            </select>
                        </div>
                        
                        <input type="submit"
                            value="Save" 
                            className="btn btn-primary btn-block mt-4 " 
                        />

                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AddProjectTask;