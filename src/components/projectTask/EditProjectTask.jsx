import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import qs from 'qs'

import ProjectTaskContext from '../../context/ProjectTaskContext/ProjectTaskContext';


const EditProjectTask = (props) => {

    const [projectTask, setProjectTask] = useState({});

    const projecTaskContext = useContext(ProjectTaskContext);
    const { getPTById, addProjectTask } = projecTaskContext;
    const ptId = props.match.params.id;
    const statusQuery = qs.parse(props.location.search, { ignoreQueryPrefix: true }).status;
    const { register, handleSubmit } = useForm();

    useEffect(() =>{
        
        getPTById(ptId).then(res => {
            setProjectTask(res.data)
        })
        
    },[]);    

    const onSubmitHandeler = (data) => {
        
        if(data.summary == ""){
            data.summary = projectTask.summary
        }
        if(data.acceptanceCriteria == ""){
            data.acceptanceCriteria = projectTask.acceptanceCriteria
        }
        if(data.status == ""){
            data.status = projectTask.status
        }
        data.id = ptId;

        // console.log(data);
        addProjectTask(data, props.history);

    }

    return (
        <div className="addProjectTask">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <Link to="/" className="btn btn-light">
                        Back to Board
                    </Link>
                    <h4 className="display-4 text-center">Edit Project Task</h4>
                    <form onSubmit={handleSubmit(onSubmitHandeler)}>
                        <div className="form-group">
                            <input type="text" 
                                required
                                className="form-control form-control-lg" 
                                placeholder="Project Task summary"
                                defaultValue={projectTask.summary}
                                {...register("summary")}
                                />
                        </div>

                        <div className="form-group">
                            <textarea className="form-control form-control-lg" 
                                required placeholder="Acceptance Criteria" 
                                defaultValue={projectTask.acceptanceCriteria}
                                {...register("acceptanceCriteria")}
                                >
                            </textarea>
                        </div>

                        <div className="form-group">
                            <select className="form-control form-control-lg" 
                                defaultValue={statusQuery}
                                {...register("status")}
                                >
                                <option value="">Select Status</option>
                                <option value="TO_DO">TO DO</option>
                                <option value="IN_PROGRESS">IN PROGRESS</option>
                                <option value="DONE">DONE</option>
                            </select>
                        </div>

                        <input type="submit"
                            value="Update" 
                            className="btn btn-primary btn-block mt-4" 
                            />
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default EditProjectTask;