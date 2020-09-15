import React from "react";
import { Menu, Dropdown } from "antd";
// import { appRequest } from "@cgi";
import { setCookie, getCookie } from "@hooks";

// async function rea(val) {
//   const data = await appRequest({
//     statusCode: 123,
//     da: 4564,
//   });
//   console.log(data);
//   // return data;
// }
function menu() {
  return (
    <Menu>
      <Menu.Item>退出登录</Menu.Item>
    </Menu>
  );
}

function Logo() {
  const logoIn = getCookie("logoIn");
  if (logoIn) {
    return (
      /* @ts-ignore */
      <Dropdown overlay={menu}>
        <span>登录了</span>
      </Dropdown>
    );
  }
  return <div>登录/注册</div>;
}

function MyHeader() {
  return (
    <div className="my_header_warp">
      <div></div>
      <div className="my_header_dropdown">
        <Logo />
      </div>
    </div>
  );
}

export default MyHeader;
