import { 
    GET_ALL_PROJECT_TASKS,
    REMOVE_PROJECT_TASK_BY_ID,
    GET_PROJECT_TASK_BY_ID
} from '../ActionTypes';

export default (state, action) => {
    switch(action.type){
        case GET_PROJECT_TASK_BY_ID:
            return{
                ...state,
                projectTask: action.payload
            }
        case REMOVE_PROJECT_TASK_BY_ID:
            return{
                ...state,
                projectTasks: state.projectTasks.filter(pt => pt.id != action.id)
            };
        case GET_ALL_PROJECT_TASKS:
            return {
                ...state,
                projectTasks: action.payload
            };
        default:
            return state;
    }
}