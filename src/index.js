import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";

import App from "./containers/App";
import { searchRobots } from "./reducers";

import "./index.css";
import "tachyons";

const store = legacy_createStore(searchRobots);

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
