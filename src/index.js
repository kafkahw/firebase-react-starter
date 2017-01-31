import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBLXvAn5OwsA5mE4rzQHitG-xrEYI9jF2s",
  authDomain: "fir-react-d84eb.firebaseapp.com",
  databaseURL: "https://fir-react-d84eb.firebaseio.com",
  storageBucket: "fir-react-d84eb.appspot.com",
  messagingSenderId: "794805927572"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
