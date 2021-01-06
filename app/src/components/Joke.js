import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchJoke } from "../actions";

const Joke = ({ title, joke, isFetching, error, fetchJoke }) => {
  useEffect(() => {
    fetchJoke();
  }, [fetchJoke]);

  return (
    <>
      <h1>{title}</h1>
      <h2>Kanye West Says: {joke}</h2>
      <button onClick={fetchJoke}>New Quote From Kanye</button>
    </>
  );
};


// Step 3: connect the component to the Redux store
const mapStateToProps = (state) => {
  return {
    joke: state.joke,
    title: state.title,
    isFetching: state.isFetching,
    error: state.error
  }
}

const mapDispatchToProps = { fetchJoke };

export default connect(mapStateToProps, mapDispatchToProps)(Joke);