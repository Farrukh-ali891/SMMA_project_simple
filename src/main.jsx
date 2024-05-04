import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

//remixicon
import 'remixicon/fonts/remixicon.css'

// Custome CSS
import './assets/css/bootstrap-icons.css'
import './assets/css/pre-loader.css'
import './assets/css/home.css' // 1st css
import './assets/css/contact.css' // 2nd css
import './assets/css/slider-team.css' // 3rd css
import './assets/css/custom.css' // 4th css
import './assets/css/testimonal.css' // 5th css
import './assets/css/login-signup.css' // 6th css
import './assets/css/custom2.css'
import './assets/css/theme2.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
)
