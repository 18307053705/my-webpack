import React from "react";
import { Menu } from "antd";
const { SubMenu } = Menu;

import { roterConfigItmeFace } from "@page/home/rooter";

interface propsData {
  data: Array<roterConfigItmeFace>;
}
import { Link } from "react-router-dom";

function rooterMenu(names, paths, childrens) {
  if (childrens) {
    return childrens.map((itme: roterConfigItmeFace) => {
      const { name, path, children } = itme;
      if (children) {
        return (
          <SubMenu key={paths + path} title={names}>
            {rooterMenu(name, paths + path, children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={paths + path}>
          <Link to={paths + path}>{name}</Link>
        </Menu.Item>
      );
    });
  }
}

function MySider(props: propsData) {
  const { data } = props;
  return (
    <Menu
      theme="dark"
      className="my_sider_warp"
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      {data.map((itme: roterConfigItmeFace) => {
        // 递归路由
        const { name, path, children } = itme;
        return (
          <SubMenu key={path} title={name}>
            {rooterMenu(name, path, children)}
          </SubMenu>
        );
      })}
    </Menu>
  );
}

export default MySider;
