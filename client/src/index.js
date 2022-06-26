// import React from "react";
// import ReactDom from "react-dom/client";
// import { Provider } from "react-redux";
// import { applyMiddleware, compose } from "redux";
// // import thunk from "redux-thunk";
// import { configureStore } from "@reduxjs/toolkit";

// // import reducers from "./reducers";

// import App from "./components/App";

// // const store = configureStore({ reducer: reducers });
// const store = configureStore();
// const root = ReactDom.createRoot(document.getElementById("root"));

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import "materialize-css/dist/css/materialize.min.css";

import reducers from "./reducers";

import App from "./components/App";

// const store = createStore(reducers, (compose(applyMiddleware(thunk))))
const store = createStore(reducers, {}, applyMiddleware(thunk));
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
