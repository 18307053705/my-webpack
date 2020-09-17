import React from "react";
import {appRequest} from '@cgi'
function One() {
  
  function aa(){
    appRequest({
      statusCode:0
    }).then(res=>{
      console.log(res,'res')
    }).catch((err)=>{
      console.log(err,'err')
    })
  }

  return (
    <div onClick={aa}>
      noe
    </div>
  );
}

export default One;
