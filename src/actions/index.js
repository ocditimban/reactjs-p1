import * as types from './../constants/ActionTypes';

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
};

export const generateTask = () => {
    return {
        type: types.GENERATE_TASK
    }
};

export const saveTask = (task) => {
    return {
        type: types.SAVE_TASK,
        task
    }
};

export const updateStatus = (index) => {
    return {
        type: types.UPDATE_STATUS,
        index
    }
};

export const deleteTask = (index) => {
    return {
        type: types.DELETE_TASK,
        index
    }
};

export const updateTask = (index, task) => {
    return {
        type: types.UPDATE_TASK,
        index,
        task
    }
};