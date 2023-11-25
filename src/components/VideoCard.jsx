import { Link } from "react-router-dom";
import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoProfilePicture,
} from "../utils/constant";
const VideoCard = ({
  vidio: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <div className="w-full">
      <div style={{ background: "#1e1e1e" }} className="lg:w-[335px] w-[230px]">
        <Link to={videoId ? `/video/${videoId}` : "/"}>
          <img
            className="w-full h-[180px] object-cover"
            src={snippet?.thumbnails?.high?.url}
            alt=""
          />
          <h2 className="px-2 py-2 font-bold text-sm  whitespace-pre-wrap pb-2 ">
            {snippet?.title.slice(0, 60)}
          </h2>
          <Link to={snippet?.channelId ? `/${snippet.channelId}/` : "/"}>
            <div className="px-2">
              <h2 className="text-gray-500 font-semibold pb-4 ">
                {snippet?.channelTitle || "Anon"}
              </h2>
            </div>
          </Link>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
