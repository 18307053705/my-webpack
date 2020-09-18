import React, { useEffect } from "react";
// import { appRequest } from "@cgi";
// import { Popup, propsFace  } from '@components'
import "./index.less";
// import Video from "video.js";
// import "videojs-flash";
// import "videojs-contrib-hls.js";
console.log("加载了");
const Two = () => {
  useEffect(() => {
    console.log(22222222222222)
    // Video("#my_video_1", {
    //   width: 120,
    //   height: 500,
    //   controls: true,
    //   sources: [
    //     {
    //       src:
    //         "http://1251953721.vod2.myqcloud.com/0ec02e46vodcq1251953721/655a544e5285890807754342813/playlist.f3.m3u8",
    //       type: "application/x-mpegURL",
    //     },
    //   ],
    // });
  }, []);

  return (
    <div>
      <div>222222222222222222222222</div>
      <video id="my_video_1" />
    </div>
  );
};

export default Two;
