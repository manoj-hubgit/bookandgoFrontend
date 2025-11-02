import React from "react";
// import Home from "./components/Home";

export const LazyHome = React.lazy(()=>import('./components/Home'))
export const LazyMovies = React.lazy(()=>import("./components/Movies"));