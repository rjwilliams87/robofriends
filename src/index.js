import React from "react";
import { createRoot } from "react-dom/client";
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import App from "./containers/App";
import { requestRobots, searchRobots } from "./reducers";

import "./index.css";
import "tachyons";

const logger = createLogger();
const rootReducer = combineReducers({ requestRobots, searchRobots });
const store = legacy_createStore(rootReducer, applyMiddleware(thunk, logger));

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
