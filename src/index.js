import React from 'react';
import ReactDOM from 'react-dom';

// Add css files
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS from Bootstrap
import '@fortawesome/fontawesome-free/css/all.css'; // CSS from FontAwesome
import './index.css'; // My own CSS

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';


const Home = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <i className="fab fa-html5 fa-5x"></i>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <p className="text-success">Welcome to Webpack, Bootstrap and ReactJS</p>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<Home />, document.querySelector("#root"));