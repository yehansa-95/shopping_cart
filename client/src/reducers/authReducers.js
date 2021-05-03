import {
    SAVE_LOCAL_USER,
    USER_LOADING
  } from "../utilities/types";

  var empty = require('is-empty');

  const initState = {
    isAuthenticated: false,
    user: {},
    loading: false
  };

  export default function(state = initState, action) {
    switch (action.type) {
      case SAVE_LOCAL_USER:
        return {
          ...state,
          isAuthenticated: !empty(action.payload),
          user: action.payload
        };
      case USER_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }