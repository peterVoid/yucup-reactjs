import { Videos } from "./";
import { useState, useEffect } from "react";
import { fetchingApi } from "./../utils/fetchingDataAPI";
import { useParams } from "react-router-dom";
const SearchVideo = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchingApi(`search?part=snippet&q=${searchTerm}`).then((resp) =>
      setVideos(resp.items)
    );
  }, [searchTerm]);
  return (
    <>
      <div className="mt-[138px] text-white md:h-[990px] ">
        <div className="md:flex gap-4 md:-mt-[203px]">
          <p className="md:text-black mt-[202px]">
            <Videos videos={videos} />
          </p>
        </div>
      </div>
    </>
  );
};

export default SearchVideo;
