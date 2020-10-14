import { combineReducers } from 'redux'

import auth from './auth'
import count from './count'

const rootReducer = combineReducers({
   auth,
   count
})

export default rootReducer