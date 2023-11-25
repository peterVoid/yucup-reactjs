import { Link } from "react-router-dom";
const AnotherVideoRecomended = ({ data }) => {
  const {
    id: { videoId },
    snippet: {
      thumbnails: {
        high: { url },
      },
      channelTitle,
      channelId,
      title,
    },
  } = data;
  console.log(data);
  return (
    <div className=" w-full">
      <Link to={`/video/${videoId}`}>
        <div className="flex items-center gap-5">
          <img
            src={url}
            alt={title}
            className="max-w-[50%]  h-full object-cover"
          />
          <div className="flex flex-col gap-7 text-white">
            <p>{title}</p>
            <p>{channelTitle}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default AnotherVideoRecomended;
