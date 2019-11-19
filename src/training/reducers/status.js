
var inititalState = false;

var myReducer = (state = inititalState, action) => {
    if (action.type === 'TOGGLE_STATUS') {
        state = !state;
        return state;
    }
    return state;
}

export default myReducer;