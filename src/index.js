import React from "react"
import ReactDOM from "react-dom"

import {BrowserRouter as Router} from "react-router-dom"
import App from "./App"
import {UserContextProvider} from "./Context"
ReactDOM.render(
<UserContextProvider><Router><App /></Router></UserContextProvider>
, document.getElementById("root"))
