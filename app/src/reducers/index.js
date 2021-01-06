const initialState = {
    title: "WEBPT22 Dads Yeehaw!",
    isFetching: false,
    joke: "",
    error: ""
  };
  
  export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCHING_JOKE_START":
        return {
          ...state,
          isFetching: true
        }
      case "FETCHING_JOKE_SUCCESS":
        return {
          ...state,
          isFetching: false,
          error: "",
          joke: action.payload
        }
      case "FETCHING_JOKE_ERROR":
        return {
          ...state,
          isFetching: false,
          error: action.payload
        }
      default:
        return state;
    }
  }