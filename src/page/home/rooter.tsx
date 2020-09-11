import { asyncComponent } from "@components/lazy";

import One from "@page/one";
import Three from "@page/three";

export interface roterConfigItmeFace {
  name: string;
  path: string;
  children?: Array<roterConfigItmeFace>;
  component?: any;
}

const roterConfig: Array<roterConfigItmeFace> = [
  {
    name: "一级路由-1",
    path: "/society",
    children: [
      {
        name: "二级路由noe",
        path: "/one",
        component: One,
      },
      {
        name: "二级路由two",
        path: "/two",
        children: [
          {
            name: "三级路由3-3-3",
            path: "/fk",
            component: asyncComponent((res) => {
              res(require("@page/two"));
            }),
          },
        ],
      },
    ],
  },
  {
    name: "一级路由-2",
    path: "/three",
    children: [
      {
        name: "二级路由three",
        path: "/",
        component: asyncComponent((res) => {
          res(require("@page/two"));
        }),
      },
    ],
  },
  {
    name: "一级路由-3",
    path: "/hhh",
    children: [
      {
        name: "二级路由3-1",
        path: "/",
        component: Three,
      },
      {
        name: "二级路由3-1",
        path: "/one",
        component: Three,
      },
      {
        name: "二级路由3-3",
        path: "/two",
        children: [
          {
            name: "三级路由3-3-3",
            path: "/fk",
            component: Three,
          },
        ],
      },
    ],
  },
  {
    name: "一级路由-3",
    path: "/fff",
    children: [
      {
        name: "二级路由3-1",
        path: "/",
        component: Three,
      },
      {
        name: "二级路由3-1",
        path: "/ggg",
        component: Three,
      },
      {
        name: "二级路由3-3",
        path: "/eeee",
        children: [
          {
            name: "三级路由3-3-3",
            path: "/we",
            component: Three,
          },
        ],
      },
    ],
  },
];

export interface roterDomConfigFace {
  path: string;
  component: any;
}

const roterDomConfig: Array<roterDomConfigFace> = [];

function roterDom(data: roterConfigItmeFace, paths: string) {
  const { component, children } = data;
  if (children) {
    children.forEach((itme: roterConfigItmeFace) => {
      roterDom(itme, paths + itme.path);
    });
  }
  if (component) {
    roterDomConfig.push({ path: paths, component });
  }
}

roterConfig.forEach((itme: roterConfigItmeFace) => {
  const { path, children } = itme;
  if (children) {
    roterDom(itme, path);
  }
});

export { roterDomConfig };

export default roterConfig;
