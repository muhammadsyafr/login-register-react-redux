
const testAction = (data) => dispatch => {
    // console.log('data from action', data)
    dispatch({ type: 'SET_TEST', value: data });
}

export const falseNotification = (data) => dispatch => {
    dispatch({ type: 'SET_FALSEACTION', value: [data.value] });
    // console.log(data)
}

export default { testAction, falseNotification }