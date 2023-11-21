import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { Layout } from "./components/Layout";
import FormPage from "./components/FormPage";
import ConfirmBox from "./components/ConfirmBox";
import { Author } from "./components/Author";
import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
          <Route exact path="/" component={Author} />
          <Route path="/form-page" component={FormPage} />
          <Route path="/confirm" component={ConfirmBox} />
        </Routes>
      </Layout>
    );
  }
}
