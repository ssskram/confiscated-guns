import * as React from "react";
import { Route } from "react-router";
import Layout from "./components/layout";
import Home from "./components/gunRecords";
import NewGun from "./components/newGun";

export default () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <Route exact path="/NewGun" component={NewGun} />
  </Layout>
);
