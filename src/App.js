import React from "react";
import Home from "./components/Home";
import Haematology from "./components/Haematology";
import Biochemistry from "./components/Biochemistry";
import Microbiology from "./components/Microbiology";
import Createreport from "./components/Reports/Create";
import Getreport from "./components/Reports/Get";
import Pricing from "./components/Pricing";
import Layout from "./components/Layout";
import NavigationBar from "./components/Navigationbar";
import Nomatch from "./components/Nomatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/haematology" component={Haematology} />
            <Route path="/biochemistry" component={Biochemistry} />
            <Route path="/microbiology" component={Microbiology} />
            <Route path="/createreport" component={Createreport} />
            <Route path="/getreport" component={Getreport} />
            <Route path="/pricing" component={Pricing} />
            <Route component={Nomatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
