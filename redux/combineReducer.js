import {combineReducers} from 'redux';
import companyReducer from './reducers/auth';

const rootReducer = combineReducers({
  company: companyReducer,
});

export default rootReducer;
