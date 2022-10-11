import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const root = ReactDOM.createRoot(document.getElementById('root'));
const firebaseConfig = {
  apiKey: "AIzaSyABj-x4mIqyXAY_0yAdsBN7nTEdszUGd5s",
  authDomain: "wira-resume-622e0.firebaseapp.com",
  projectId: "wira-resume-622e0",
  storageBucket: "wira-resume-622e0.appspot.com",
  messagingSenderId: "766809992429",
  appId: "1:766809992429:web:5c8c7e3c3f0050082bf0e4",
  measurementId: "G-SVBBEFV2J5"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
