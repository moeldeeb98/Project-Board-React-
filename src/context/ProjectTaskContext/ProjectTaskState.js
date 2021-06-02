import React, {useReducer} from 'react';
import ProjectTaskReducer from './ProjectTaskReducer';
import ProjectTaskContext from './ProjectTaskContext';

import axios from 'axios';

import {
    GET_ALL_PROJECT_TASKS,
    REMOVE_PROJECT_TASK_BY_ID,
    GET_PROJECT_TASK_BY_ID
} from '../ActionTypes'

const PROJECT_TASK_BASE_URL = "http://localhost:8081/api/v1/board"

const ProjectTaskState = (props) =>{
    
    const initialState = {
        projectTasks: [],
        projectTask: {},
    }

    const [state, dispatch] = useReducer(ProjectTaskReducer, initialState);

    const addProjectTask = (projectTask, history) => {
        axios
            .post(PROJECT_TASK_BASE_URL, projectTask)
            .then(res => {
                if(res.status == 201){
                    history.push('/');
                }
            })
            .catch(error => {
                alert(error.response.data.message);
            })
    }

    const getAllPTs = () => {
        axios
            .get(`${PROJECT_TASK_BASE_URL}/all`)
            .then(res => {
                dispatch({
                    type: GET_ALL_PROJECT_TASKS,
                    payload: res.data
                });

            })
            .catch(err => {
                alert(err.response.data.message);
            })
    }

    const removePT = (id) => {
        axios
        .delete(`${PROJECT_TASK_BASE_URL}/${id}`)
        .then(res => {
            if(res.status == 200){
                // window.location.reload();
                dispatch({
                    type: REMOVE_PROJECT_TASK_BY_ID,
                    id: id
                });
            }
        })
        .catch(err => {
            alert(err.response);
        })
    }

    const getPTById = async (id) => {
        return await axios
        .get(`${PROJECT_TASK_BASE_URL}/${id}`)
        .catch(err => {
            alert( err.response.data )
        })
    }


    return (
        <ProjectTaskContext.Provider
            value={{
                projectTask: state.projectTask,
                projectTasks: state.projectTasks,
                addProjectTask,
                getAllPTs,
                getPTById,
                removePT
            }}>

            {props.children}
        </ProjectTaskContext.Provider>
    )
}

export default ProjectTaskState;