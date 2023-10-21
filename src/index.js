import React from "react";
import { createRoot } from 'react-dom/client';

import App from "./App";
import store from "./Redux/store";
import { Provider } from "react-redux";

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
