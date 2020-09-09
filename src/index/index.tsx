import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./index.less";

import  {downloadExcel}  from "@hook/downloadExcel";
export interface PropsCeof {
  id: number;
  organization_code: number;
  organization_name: string;
}
function myDownloadExcel() {
  const data: Array<PropsCeof> = [
    {
      id: 1,
      organization_code: 123,
      organization_name: "李四",
    },
    {
      id: 2,
      organization_code: 789,
      organization_name: "李三",
    },
    {
      id: 3,
      organization_code: 456,
      organization_name: "李二",
    },
  ];
  const options = [
    {
      title:'组织ID',
      value:'id'
    },
    {
      title:'组织代码',
      value:'organization_code'
    },
    {
      title:'组织名称',
      value:'organization_name'
    }
  ]
  downloadExcel({data,options});
}

function Init() {
  return (
    <div>
      {/* <img src='./img/dg4564.jpg'/> */}
      <img src="./img/dg4564.jpg" />
      <div className="red fontSize">holle webpack wacth</div>
      <div onClick={myDownloadExcel}>导出Excel表格</div>
    </div>
  );
}

ReactDOM.render(<Init />, document.getElementById("root"));
