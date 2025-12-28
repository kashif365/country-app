import {NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return <div className="container">
    <h1>ErrorPage</h1>
    <NavLink to="/">
        <button>Go Home</button>
    </NavLink>
  </div>;
};
