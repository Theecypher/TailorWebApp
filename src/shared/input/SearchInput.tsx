import { img } from "../../constant";

const SearchInput = () => {
  return (
    <div className="hidden lg:flex ">
      <div className="flex items-center px-5 py-1 gap-2 border border-border rounded-100">
        <img className="w-5 h-5  border-none" src={img.search} alt="" />
        <input
          type="text"
          className="bg-transparent outline-none"
          placeholder="Search for project, user etc"
        />
      </div>
    </div>
  );
};

export default SearchInput;
