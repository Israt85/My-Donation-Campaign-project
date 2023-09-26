import SearchBar from "../SearchBar/SearchBar";

const Banner = () => {
  return (
    <div className=" max-w-7xl mx-auto h-full">
      <div className="relative bg-cover bg-center bg-no-repeat h-[70vh] hero" style={{ backgroundImage: 'url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png)' }}>
        <div className="absolute bg-white inset-0 bg-opacity-50"></div>
        <div className=" text-center text-neutral-content relative z-10">
          <div className="max-w-full">
            <h1 className="mb-5 pt-32 text-4xl font-extrabold text-black">I Grow By Helping People In Need</h1>
            <SearchBar></SearchBar>


          </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;



