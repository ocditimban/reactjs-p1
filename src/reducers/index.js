import { combineReducers } from 'redux';
import tasks from './tasks';
import taskEditing from './taskEditing';

const myReducer = combineReducers({
    tasks,
    taskEditing
});

export default myReducer;