const paginationDefaultState = {
    page: 1
};

const paginationReducer = (state = paginationDefaultState, action) => {
    switch(action.type) {
        case 'CHANGE_PAGE':
            return {
                page: action.page
            };
        default:
            return state;
    }
};

export default paginationReducer;