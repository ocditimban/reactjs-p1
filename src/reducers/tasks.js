import * as types from './../constants/ActionTypes';
var randomstring = require("randomstring");

var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];
var generateData = [
    {
      id: randomstring.generate(),
      name: 'learn dev',
      status: true
    },
    {
      id: randomstring.generate(),
      name: 'swimming',
      status: true
    },
    {
      id: randomstring.generate(),
      name: 'sleep',
      status: true
    }
];

var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GENERATE_TASK:
            localStorage.setItem('tasks', JSON.stringify(generateData));
            return generateData;
        case types.LIST_ALL:
            return state;
        case types.SAVE_TASK:
            if (action.task.hasOwnProperty('index')) {
                state[action.task.index] = {
                    ...state[action.task.index],
                    name: action.task.name,
                    status: action.task.status
                };
            }
            else {
                var newTask = {
                    id: randomstring.generate(),
                    name: action.task.name,
                    status: action.task.status === true ? true : false
                }
                state.push(newTask);
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.UPDATE_STATUS:
            state[action.index] = {
                ...state[action.index],
                status: !state[action.index].status
            };

            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.DELETE_TASK:
            state.splice(action.index, 1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
};

export default myReducer;