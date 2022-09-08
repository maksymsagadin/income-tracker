import React from "react"
import ReactDOM from "react-dom"

import { Provider } from "./context/context.js"
import App from './App.js'
import './index.css'

ReactDOM.render(
    <Provider>
        <App />
    </Provider>, 
    document.getElementById('root')
)