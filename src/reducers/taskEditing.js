import * as types from './../constants/ActionTypes';


// var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = {};

var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.UPDATE_TASK:
            action.task.index = action.index;
            return action.task;
        default:
            return state;
    }
};

export default myReducer;