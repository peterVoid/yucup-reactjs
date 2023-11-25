import { Link } from "react-router-dom";
const ChannelDetail = ({ channelDetail }) => {
  return (
    <div className="lg:mr-[130px] lg:mt-4 w-full">
      <Link
        to={
          channelDetail?.id?.channelId &&
          `/channel/${channelDetail?.id?.channelId}`
        }>
        <div className="flex items-center justify-center flex-col text-center">
          <div className="mx-auto w-[200px]">
            <img
              className="rounded-[1000px]"
              src={channelDetail?.snippet?.thumbnails?.high?.url}
              alt=""
            />
          </div>
          <p className="md:mt-5 font-bold text-2xl">
            {channelDetail?.snippet?.title}
          </p>
          <p className="md:mt-5 font-bold text-2xl">
            {channelDetail?.statistics
              ? `${parseInt(
                  channelDetail?.statistics?.subscriberCount
                ).toLocaleString()} Subscribers`
              : ""}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ChannelDetail;
