import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Main,
  ChannelData,
  SearchVideo,
  VideoData,
} from "./components";
const App = () => {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/channel/:id" element={<ChannelData />} />
          <Route path="/video/:id" element={<VideoData />} />
          <Route path="/search/:searchTerm" element={<SearchVideo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
