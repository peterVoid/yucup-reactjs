import { Feed, Videos } from "./";
import { useState, useEffect } from "react";
import { fetchingApi } from "./../utils/fetchingDataAPI";

const Main = () => {
  const [selectedCategori, setSelectedCategori] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchingApi(`search?part=snippet&q=${selectedCategori}`).then((resp) =>
      setVideos(resp.items)
    );
  }, [selectedCategori]);
  return (
    <>
      <div className="mt-[138px] text-white md:h-[990px] ">
        <div className="md:flex gap-4">
          <Feed
            selectedCategori={selectedCategori}
            setSelectedCategori={setSelectedCategori}
          />
          <Videos selectedCategori={selectedCategori} videos={videos} />
        </div>
      </div>
    </>
  );
};

export default Main;
