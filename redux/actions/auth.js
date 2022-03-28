import auth from '@react-native-firebase/auth';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

const registerStart = () => ({
  type: REGISTER_START,
});

const registerSuccess = user => ({
  type: REGISTER_SUCCESS,
  user,
});

const registerFail = error => ({
  type: REGISTER_FAIL,
  error,
});

export const register = (email, password) => {
  return async dispatch => {
    dispatch(registerStart());
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({user}) => {
        console.log('User account created & signed in!');
        dispatch(registerSuccess(user));
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
};
