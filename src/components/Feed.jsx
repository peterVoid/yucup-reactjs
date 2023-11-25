import { categories } from "../utils/constant";
const Feed = ({ selectedCategori, setSelectedCategori }) => {
  return (
    <div className=" bg-black">
      <div className="flex md:flex-col items-center justify-start gap-5 px-4 overflow-y-auto">
        {categories.map((categori) => (
          <button
            onClick={() => setSelectedCategori(categori.name)}
            style={{
              background: selectedCategori === categori.name ? "red" : "",
            }}
            className="px-3 py-2 bg-transparent hover:bg-red-600 rounded-full ease-in-out duration-200 text-center">
            <p>{categori.name}</p>
          </button>
        ))}
      </div>
      <div className="mt-5 w-full hidden md:block px-2">
        <p className="text-md font-bold text-slate-700">
          Copyright bang 2023 peter
        </p>
      </div>
    </div>
  );
};

export default Feed;
