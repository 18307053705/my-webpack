import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./index.less";
import ExportJsonExcel from "js-export-excel";
// import img from './img/dg4564.jpg';

// import { MyPromise } from './index.ts'

function downloadExcel(){
    const data = [
        {
            id:1,
            organization_code:123,
            organization_name:'李四'
        },
        {
            id:2,
            organization_code:789,
            organization_name:'李三'
        },
        {
            id:3,
            organization_code:456,
            organization_name:'李二'
        }
    ]; //表格数据
    var option = {};
    let dataTable = [];
    if (data) {
      for (let i in data) {
        if (data) {
          let obj = {
            '组织ID': data[i].id,
            '组织代码': data[i].organization_code,
            '组织名称': data[i].organization_name,
          };
          dataTable.push(obj);
        }
      }
    }
    option.fileName = "组织信息";
    option.datas = [
      {
        sheetData: dataTable,
        sheetName: "sheet",
        sheetFilter: ["组织ID", "组织代码", "组织名称"],
        sheetHeader: ["组织ID", "组织代码", "组织名称"],
      },
    ];

    var toExcel = new ExportJsonExcel(option);
    toExcel.saveExcel();
  };


function Init() {
  
  const promise1 = new Promise((resolve, reject)=>{
    resolve('promise1')
  })
  const promise2 = new Promise((resolve, reject)=>{
    resolve('promise2')
  }) 
  const promise3 = new Promise((resolve, reject)=>{
    reject('promise3...')
    resolve('promise3')
  })

  Promise.all([promise2,promise1,promise3]).then(
    (res1)=>{
      console.log(res1,res2,res3)
    }
  ).catch(err=>{
    console.log(err)
  })




  return (
    <div>
      {/* <img src={ img }/> */}
      {/* <img src='./img/dg4564.jpg'/> */}
      <img src='./img/dg4564.jpg'/>
      <div className="red fontSize">holle webpack wacth</div>
      <div onClick={downloadExcel}>导出Excel表格</div>

    </div>
  );
}

ReactDOM.render(<Init />, document.getElementById("root"));


