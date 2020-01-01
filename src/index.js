import React from 'react';
import ReactDOM from 'react-dom';


import Home from './components/Home.js';
// Add css files
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS from Bootstrap
import '@fortawesome/fontawesome-free/css/all.css'; // CSS from FontAwesome
import './index.css'; // My own CSS

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';

let counter = 0;
let day = 0;
let hour = 0;
let min = 0;
let sec = 0;

let count = setInterval( function() {

    
    ReactDOM.render(<Home  num1={sec} num2={min} num3 ={hour} num4={day} />, document.querySelector("#root"))
    sec++;
    if (sec == 60){
        sec = 0;
        min++;
    }
    else if(min == 60){
        min = 0;
        hour++;
    }
    else if(hour == 24){
    hour = 0;
    day++;
    clearInterval(count) 
    }
    
},
    1000); 
   