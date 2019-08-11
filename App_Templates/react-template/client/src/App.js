import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Test from "./pages/Test";

const App = () => (
  <Router>
  <div>
    <Route exact path="/" component={Test} />
    <Route exact path="/Test" component={Test} />
    {/* <Route exact path="/Test/:id" component={Test} /> */}
    {/* <Test /> */}
  </div>
  </Router>
);


export default App;
