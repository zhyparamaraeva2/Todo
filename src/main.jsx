import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import store from "src/redux/store.js";
import {Provider} from "react-redux";
import {ErrorBoundary} from "src/providers/ErrorBoundary/index";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <Provider store={store} value={"store"}>
            <App />
          </Provider>
  </React.StrictMode>,
)
