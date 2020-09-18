import React, { useState, useEffect } from "react";
import { Menu, Layout } from "antd";

import { roterConfigItmeFace } from "@page/home/rooter";
import { Link, withRouter } from "react-router-dom";

const { SubMenu } = Menu;
interface propsData {
  data: Array<roterConfigItmeFace>;
  location?: any;
}

function rooterMenu(names, paths, childrens) {
  if (childrens) {
    return childrens.map((itme: roterConfigItmeFace) => {
      const { name, path, children } = itme;
      if (children) {
        return (
          <SubMenu key={paths + path} title={names} onTitleClick={(...res)=>{console.log(res,'res............')}}>
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

function getPathname(props) {
  // 根据路由选择菜单
  const pathname: string = props.location.pathname;
  const pathArr = pathname.split("/");
  const openKeys: string[] = [];
  const lenght = pathArr.length;
  if (lenght >= 2) {
    const newArr = pathArr.slice(1, lenght - 1);
    const len = newArr.length;
    if (len > 1) {
      newArr.forEach((v, index) => {
        index
          ? openKeys.push("/" + newArr.slice(0, index + 1).join("/"))
          : openKeys.push("/" + v);
      });
    } else {
      openKeys.push("/" + newArr[0]);
    }
  } else {
    openKeys.push("/" + pathArr[1]);
  }
  return openKeys;
}

function MySider(props: propsData) {
  const { data } = props;
  const [selectedKeys, setSelectedKeys] = useState([props.location.pathname]);
  const [openKeys, setOpenKeys] = useState(getPathname(props));

  useEffect(() => {
    const pathname: string = props.location.pathname;
    setSelectedKeys([pathname]);
    setOpenKeys(getPathname(props));
  }, [props.location.pathname]);

  return (
    <Layout.Sider>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={(res) => {
          console.log(res);
          setOpenKeys(res as string[])
        }}
      >
        {data.map((itme: roterConfigItmeFace) => {
          // 递归路由
          const { name, path, children } = itme;
          return (
            <SubMenu key={path} title={name} onTitleClick={(...res)=>{console.log(res,'res............')}}>
              {rooterMenu(name, path, children)}
            </SubMenu>
          );
        })}
      </Menu>
    </Layout.Sider>
  );
}

export default withRouter(MySider);
