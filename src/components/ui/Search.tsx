import Image from "next/image";

type SearchProps = {
  placeholder: string;
  styles?: string;
};

const Search = ({ placeholder, styles }: SearchProps) => {
  return (
    <div
      className={`w-fit overflow-hidden rounded-full border border-black transition has-[:focus]:shadow has-[:focus]:shadow-black/20 ${styles}`}
    >
      <input
        type="search"
        name="search"
        id="search"
        placeholder={placeholder}
        className="size-full py-[10px] pl-12 outline-none"
      />
      {/* <IoSearchOutline className="text-gray-400" /> */}
      <Image
        width={25}
        height={25}
        src={"/search.svg"}
        alt="Search icon"
        className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2"
      />
    </div>
  );
};

export default Search;
