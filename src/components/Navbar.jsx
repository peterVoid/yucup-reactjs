import { logo } from "../utils/constant";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <nav className="w-full text-white bg-black fixed z-[1000]">
      <div className="flex justify-between items-center p-7">
        <Link to="/">
          <div className="w-full max-w-[100px]  ml-2 sm:ml-7 flex items-center gap-2">
            <img src={logo} alt="" height={40} className="w-20 object-cover" />
            <p className="text-xl sm:text-3xl font-bold">Yucup</p>
          </div>
        </Link>
        <form
          onSubmit={handleSubmit}
          className=" w-[60%]  sm:w-[40%] text-black relative">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="input yout type..."
            className="w-full px-5 py-3 rounded-3xl outline-none"
          />
          <button
            type="submit"
            className="absolute top-1 right-4 rounded-full hover:bg-slate-700 hover:text-white text-lg px-4 py-2 -translate-y-[5%] translate-x-[20%] ease-in-out duration-150 transition-all">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
