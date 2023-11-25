import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchingApi } from "./../utils/fetchingDataAPI";
import ReactPlayer from "react-player";
import { AnotherVideoRecomended } from "./";
const VideoData = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  const [channelDetail, sethannelDetail] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchingApi(`videos?part=snippet,statistics&id=${id}`).then((resp) =>
      setVideoDetails(resp.items[0])
    );
    fetchingApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (resp) => setVideos(resp.items)
    );
  }, [id]);
  if (!videoDetails) return "Loading...";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;
  return (
    <div
      className="min-h-[96vh] mt-[138px]"
      style={{ backgroundColor: "#0f0f0f" }}>
      <div className="flex flex-col  md:flex-row h-full">
        <div className="max-w-[80%] pr-7">
          <div className="sticky w-full">
            <ReactPlayer
              playing={true}
              height={750}
              width={1400}
              url={`https://www.youtube.com/watch?v=${id}`}
              style={{
                marginLeft: "50px",
                border: "5px solid white",
              }}
            />
            <div className="flex flex-col">
              <p className="text-white text-2xl ml-[60px] mt-[25px] font-semibold">
                {title}
              </p>
              <div className="flex justify-between items-center">
                <div className="">
                  <Link to={`/channel/${channelId}`}>
                    <p className="text-lg font-extralight ml-[60px] text-white md:mt-[10px]">
                      {channelTitle}
                    </p>
                  </Link>
                </div>
                <p className="text-white text-xl font-extralight">
                  {parseInt(viewCount).toLocaleString()} Views
                </p>
                <p className="text-white text-xl font-extralight absolute right-0 -bottom-9">
                  {parseInt(likeCount).toLocaleString()} Likes
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-full mr-4 mt-[70px] lg:mt-0">
          <div className="w-full">
            {videos.map((item) => (
              <AnotherVideoRecomended data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoData;
