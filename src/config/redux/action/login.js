import firebase from '../../firebase/firebase';

export const loginUserAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({ type: 'SET_LOADING', value: true });
        dispatch({ type: 'SET_DISABLED', value: true });
        firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(res => {
            // console.log(res)
            let dataUser = {
                id: res.user.uid,
                email: res.user.email,
                emailVerified: res.user.emailVerified,
                refreshToken: res.user.refreshToken,
                status: "login"
            }
            // console.log('success : ', res.user)
            dispatch({ type: 'SET_LOADING', value: false });
            dispatch({ type: 'SET_DISABLED', value: false });

            resolve(dataUser)
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

export default { loginUserAPI }