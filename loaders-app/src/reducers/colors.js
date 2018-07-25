const colorsReducerDefaultState = {
    spinnerColor: '#1043A0'
};

const colorsReducer = (state = colorsReducerDefaultState, action) => {
    switch(action.type) {
        case 'CHANGE_SPINNER_COLOR':
            return {
                spinnerColor: action.spinnerColor
            };
        default:
            return state;
    }
};

export default colorsReducer;