const initaialValue = false;

const isDataReducer = (state = initaialValue, action) => {
     switch(action.type) {
        case "CHANGE":
        return !state
        default :
            return state;
     }
};

export default isDataReducer;
