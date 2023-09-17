

const Searchbar = () => {
  return (
    <form className="relative w-[440px]">
      <div className="relative">
        <input
          type="search"
          placeholder="Search your datasets"
          className="w-full rounded-full bg-slate-800 p-4"
        />
      </div>
    </form>
  );
};

export default Searchbar;
