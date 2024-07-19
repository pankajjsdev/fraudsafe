// actions/userActions.js
import {setUser} from '../../reducers/auth/login';

export const loginUser = (userData?: any) => {
  // Simulate a login API call
  setTimeout(() => {
    setUser(userData);
  }, 1000);
};

// export const logoutUser = () => (dispatch: ThunkDispatch) => {
//   // Simulate a logout API call
//   setTimeout(() => {
//     dispatch(clearUser({}));
//   }, 1000);
// };
