// Icons
import { IoSearchOutline } from "react-icons/io5";

type SearchProps = {
  placeholder: string;
  styles?: string;
};

const Search = ({ placeholder, styles }: SearchProps) => {
  return (
    <div
      className={`absolute w-fit overflow-hidden rounded-full border border-black transition has-[:focus]:shadow has-[:focus]:shadow-black/20 ${styles}`}
    >
      <input
        type="search"
        name="search"
        id="search"
        placeholder={placeholder}
        className="size-full py-3 pl-12 pr-5 outline-none"
      />
      <IoSearchOutline className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400" />
    </div>
  );
};

export default Search;
