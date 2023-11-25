import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchingApi } from "./../utils/fetchingDataAPI";
import { ChannelDetail, Videos } from "./";
const ChannelData = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);
  const { id } = useParams();
  console.log(id)
  useEffect(() => {
    fetchingApi(`channels?part="snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchingApi(`search?channelId=${id}&part=snippet&order=date`).then((resp) =>
      setChannelVideos(resp?.items)
    );
  }, [id]);
  return (
    <div className="mt-[138px] bg-black text-white">
      <div
        className="h-[300px]"
        style={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
        }}></div>
      <div className="mt-5">
        <ChannelDetail channelDetail={channelDetail} />
        <Videos videos={channelVideos} />
      </div>
    </div>
  );
};

export default ChannelData;
