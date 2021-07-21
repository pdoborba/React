import React from "react";
import "./Details.css";

import { withRouter } from "react-router-dom";

const Details = ({ location }) => {
  const { state } = location;

  console.log(state);

  if (!state) return null;
  return (
    <div
      className="details--image"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${state.backdrop_path})`,
      }}
    >
      <h1>{state && state.title ? state.title : state.name}</h1>
      <span>{state.overview}</span>
    </div>
  );
};

export default withRouter(Details);
