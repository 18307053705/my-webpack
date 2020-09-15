import React from "react";
import ReactDOM from "react-dom";
import { Layout } from "antd";
import "antd/dist/antd.less";
import "./index.less";
const { Content, Sider } = Layout;

import roterConfig, { roterDomConfig, roterDomConfigFace } from "./rooter";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import MyHeader from "./components/MyHeader";
import MySider from "./components/MySider";

function Root() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MyHeader />
      <Layout>
        <Router>
          <Sider>
            <MySider data={roterConfig} />
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                {roterDomConfig.map((itme: roterDomConfigFace, index) => {
                  return (
                    <Route
                      key={index}
                      path={itme.path}
                      component={itme.component}
                    />
                  );
                })}
              </Switch>
            </Content>
          </Layout>
        </Router>
      </Layout>
    </Layout>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
