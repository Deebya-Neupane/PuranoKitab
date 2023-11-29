import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { Layout } from "./components/Layout";
import FormPage from "./components/FormPage";
import "./custom.css";
import Author from "./components/Author";

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
          <Route path="/" component={Author} />
          <Route path="/form-page" component={FormPage} />
        </Routes>
      </Layout>
    );
  }
}
