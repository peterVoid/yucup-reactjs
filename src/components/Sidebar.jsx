import { categories } from "../utils/constant.js";

const Sidebar = ({ selectedList, setSelectedList }) => {
  return (
    <>
      <div className="flex md:flex-col flex-row gap-4 justify-start items-start border-r-2   px-7">
        {categories.map((item) => {
          return (
            <button
              onClick={() => setSelectedList(item.name)}
              className="px-4 py-2 hover:bg-red-800  rounded-full mx-auto"
              style={{
                background: item.name === selectedList ? "red" : "",
              }}>
              <p
                className={
                  item.name === selectedList ? "opacity-100" : "opacity-80"
                }>
                {item.name}
              </p>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
