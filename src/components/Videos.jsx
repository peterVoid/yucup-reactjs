import axios from "axios";
import { useState, useEffect } from "react";
import { VideoCard, ChannelDetail } from "./";
const Videos = ({ selectedCategori, videos }) => {
  return (
    <div className=" w-full md:bg-black ">
      <h2 className="text-2xl font-bold md:text-3xl md:ml-5 text-black md:text-white py-7">
        <span className="text-slate-700">Contents</span> of
        {!selectedCategori && `${videos[0]?.snippet?.channelTitle}`}
        {selectedCategori && `${selectedCategori}`}
      </h2>
      <div className="flex md:ml-4 flex-wrap gap-4 justify-start items-start">
        {videos.map((item, id) => (
          <div className=" ">
            {item.id.videoId && <VideoCard vidio={item} />}
            {item.id.channelId && <ChannelDetail channelDetail={item} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
