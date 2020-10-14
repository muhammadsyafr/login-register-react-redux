const initState = {
    testVal: 0,
}

const count = (state = initState, action) => {
    
    if (action.type === 'SET_TEST') {
        return {
            ...state,
            testVal: state.testVal + action.value,
        }
    }

    return state
}

export default count;
