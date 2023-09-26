

const SearchBar = () => {


  return (
    <div className="">
      <div className="relative h-10 max-w-full">
        <input type="text" placeholder="Search here" className="py-1 px-4 input-bordered rounded-sm w-full max-w-xs" />

        <div>
          <button
            className="!absolute -top-0 ml-20 select-none rounded bg-red-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-700/100 transition-all hover:shadow-lg hover:shadow-red-700/50 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Search
          </button>
        </div>

      </div>

    </div>
  );
};

export default SearchBar;