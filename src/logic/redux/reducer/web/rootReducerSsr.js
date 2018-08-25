import { combineReducers } from 'redux';
import Auth from 'src/logic/redux/isomorphic/auth/reducer';
import App from 'src/logic/redux/isomorphic/app/reducer';
import auth from 'src/logic/redux/auth/reducer';
// import DevReducers from '../customApp/redux/reducers';

export default combineReducers({
  auth,
  Auth,
  App,

  // ...DevReducers
});
