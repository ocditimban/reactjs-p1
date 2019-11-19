
var inititalState = {
    by: 'name',
    value: 1
}

var myReducer = (state = inititalState, action) => {
    if (action.type === 'SORT') {
        var {by, value} = action.sort;

        return {
            by: by,
            value: value
        }
    }
    return state;
}

export default myReducer;