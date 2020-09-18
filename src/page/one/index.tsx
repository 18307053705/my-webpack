import React, { useState, useEffect } from "react";
// import { appRequest } from "@cgi";
// import { Popup, propsFace  } from '@components'
// import Video from "video.js";
// import "videojs-flash";
// import "videojs-contrib-hls.js";
const One = () => {
  const [st] = useState("111111111111111111111");
  useEffect(() => {
    console.log(st);
  }, []);
  // function aa() {
  //   appRequest({
  //     statusCode: 0,
  //   })
  //     .then((res) => {
  //       console.log(res, "res");
  //     })
  //     .catch((err) => {
  //       console.log(err, "err");
  //     });
  // }

  return (
    <div>
      <div>1111111111111111111111</div>
      <video id="my_video_1" />

      {/* <Popup /> */}
    </div>
  );
};

export default One;
