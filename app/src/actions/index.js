import axios from 'axios';

const headers = {
  Accept: "application/json"
}

export const fetchJoke = () => (dispatch) => {
  // dispatch a fetching joke start action
  dispatch({ type: "FETCHING_JOKE_START" });

  // Hit the api, with success and failure cases dispatching appropriate actions
  axios.get("https://icanhazdadjoke.com/", { headers: headers })
    .then(res => {
      dispatch({ type: "FETCHING_JOKE_SUCCESS", payload: res.data.joke })
      console.log(res);
    })
    .catch(err => {
      dispatch({ type: "FETCHING_JOKE_ERROR", payload: err })
      console.log(err);
    })
}