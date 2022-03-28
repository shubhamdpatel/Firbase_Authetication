import {REGISTER_FAIL, REGISTER_START, REGISTER_SUCCESS} from '../actions/auth';

const initialState = {
  user: null,
  error,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: action.error,
      };
  }
  return state;
};
