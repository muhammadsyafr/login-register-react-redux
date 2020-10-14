const initState = {
    isLogin: false,
    isLoading: false,
    isDisabled: false,
    successRegist: false,
    falseAction: false,
    messageAction: '',
    testVal: 0,
}

const auth = (state = initState, action) => {
    // console.log(action.value)
    if (action.type === 'SET_TEST') {
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

    return state
}

export default auth;
