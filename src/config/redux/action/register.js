import firebase from '../../firebase/firebase';

export const registerUserAPI = (data) => dispatch => {
    dispatch({ type: 'SET_LOADING', value: true });
    dispatch({ type: 'SET_DISABLED', value: true });
    return new Promise((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(res => {
            // console.log('success : ', res)
            dispatch({ type: 'SET_LOADING', value: false });
            dispatch({ type: 'SET_DISABLED', value: false });
            dispatch({ type: 'SET_REGIST', value: true });
            resolve(true)
        }).catch(function (error) {
            // var errorCode = error.code;
            var errorMessage = error.message;
            // console.log(errorCode, errorMessage)
            dispatch({ type: 'SET_LOADING', value: false });
            dispatch({ type: 'SET_DISABLED', value: false });
            dispatch({ type: 'SET_FALSEACTION', value: [true, errorMessage] });
            reject(false)
        })
    })
}

export default { registerUserAPI }