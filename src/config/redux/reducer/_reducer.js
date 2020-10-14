const initialState = {
    isLogin: false,
    isLoading: false,
    isDisabled: false,
    successRegist: false,
    falseAction: false,
    messageAction: '',
    testVal: 10,
}

const reducer = (state = initialState, action) => {
    // REDUCER REGISTER & LOGIN
    if (action.type === 'SET_TEST') {
        console.log('data in reducers from action', action.value)
        return {
            ...state,
            testVal: state.testVal + action.value,
        }
    }

    if (action.type === 'SET_LOADING') {
        return {
            ...state,
            isLoading: action.value,
        }
    }

    if (action.type === 'SET_DISABLED') {
        return {
            ...state,
            isDisabled: action.value
        }
    }

    if (action.type === 'SET_REGIST') {
        return {
            ...state,
            successRegist: action.value
        }
    }

    if (action.type === 'SET_FALSEACTION') {
        return {
            ...state,
            falseAction: action.value[0],
            messageAction: action.value[1]
        }
    }
    // END REDUCER FOR REGISTER & LOGIN
    
    return state
}

export default reducer
