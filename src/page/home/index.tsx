import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import roterConfig, { roterDomConfig, roterDomConfigFace } from "./rooter";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.less";
import "./index.less";

import MyHeader from "./components/MyHeader";
import MySider from "./components/MySider";
import ErrorBoundary from "./components/errorBoundary";

const { Content } = Layout;

function Root() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MyHeader />
      <Layout>
        <Router>
          <MySider data={roterConfig} />

          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Suspense fallback={<div>加载中</div>}>
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
              </Suspense>
            </Content>
          </Layout>
        </Router>
      </Layout>
    </Layout>
  );
}

ReactDOM.render(
  <ErrorBoundary>
    <Root />
  </ErrorBoundary>,
  document.getElementById("root")
);
