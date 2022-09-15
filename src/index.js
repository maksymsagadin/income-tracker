import React from "react"
import ReactDOM from "react-dom"
import { SpeechProvider } from "@speechly/react-client"
import { Provider } from "./context/context.js"
import App from './App.js'
import './index.css'

ReactDOM.render(
    <SpeechProvider appId="f90a7634-d642-4a63-8e64-c750928c8ef6" language='en-US'>
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
)