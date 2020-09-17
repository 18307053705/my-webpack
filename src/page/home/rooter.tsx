import { asyncComponent } from "@components/lazy";

// import One from "@page/one";

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
        component: asyncComponent((res) => {
          res(require("@page/one"));
        }),
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
