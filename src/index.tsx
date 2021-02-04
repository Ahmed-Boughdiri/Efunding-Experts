import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import IDReducer from "./reducers/IDReducer";
import QuoteIDReducer from "./reducers/QuoteIDReducer";
import CourseReducer from "./reducers/CourseReducer";
import EditInfoReducer from "./reducers/EditInfoReducer";
import EditDataReducer from "./reducers/EditData";

const store = createStore(combineReducers({
  idReducer: IDReducer,
  quoteIDReducer: QuoteIDReducer,
  courseReducer: CourseReducer,
  EditInfoReducer,
  EditDataReducer
}))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
