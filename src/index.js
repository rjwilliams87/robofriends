import React from "react";
import { createRoot } from "react-dom/client";
import { legacy_createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";

import App from "./containers/App";
import { searchRobots } from "./reducers";

import "./index.css";
import "tachyons";

const logger = createLogger();
const store = legacy_createStore(searchRobots, applyMiddleware(logger));

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
