
import {lazy} from 'react';

export interface roterConfigItmeFace {
  name: string;
  path: string;
  children?: Array<roterConfigItmeFace>;
  component?: any;
}

// 需要懒加载的组件
const One = lazy(()=>(import("@page/one")));
const Two = lazy(()=>(import("@page/two")));
console.log(One,'one...................')
const roterConfig: Array<roterConfigItmeFace> = [
  {
    name: "一级路由-1",
    path: "/society",
    children: [
      {
        name: "二级路由noe",
        path: "/one",
        component:  One
      },
      {
        name: "二级路由two",
        path: "/two",
        component:  Two
      },
      {
        name: "二级路由twoss",
        path: "/twoss",
        children: [
          {
            name: "三级路由noe",
            path: "/one3",
            component:  One
          },
          {
            name: "三级路由two",
            path: "/two3",
            component:  Two
          }
        ],
      }
    ],
  },
  {
    name: "一级路由-2",
    path: "/societyss",
    children: [
      {
        name: "二级路由noe",
        path: "/one",
        component:  One
      },
      {
        name: "二级路由two",
        path: "/two",
        component:  Two
      },
      {
        name: "二级路由twoss",
        path: "/twoss",
        children: [
          {
            name: "三级路由noe",
            path: "/one3",
            component:  One
          },
          {
            name: "三级路由two",
            path: "/two3",
            component:  Two
          }
        ],
      }
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
