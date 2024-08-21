import React from "react";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { useDebounce } from "../../hooks/use-Debounce";
import { useSearch } from "../../Components/Search/Service/Query/use-Search";
import { CategoryCard } from "../../Components/Category-Card";

export const Search = () => {
  const [inputValue, setValue] = React.useState("");
  const debouncedValue = useDebounce(inputValue);
  const { data } = useSearch(debouncedValue);

  return (
    <div className="relative mx-auto mt-10 flex w-full max-w-4xl flex-col items-center">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <BsFillSearchHeartFill className="text-2xl text-gray-500" />
        </div>
        <input
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search..."
          className="w-full rounded-full border border-gray-300 bg-white p-4 pl-12 text-sm text-gray-800 shadow-md outline-none transition-all duration-300 ease-in-out focus:ring-2 focus:ring-green-500"
          type="text"
        />
      </div>
      {inputValue.length >= 3 && (
        <div className="absolute left-1/2 top-full z-10 mt-5 w-[900px] -translate-x-1/2 transform rounded-[30px] bg-[#bcb7cb] shadow-lg">
          <div className="p-4">
            {data?.length ? (
              data.map((item) => <CategoryCard key={item.id} {...item} />)
            ) : (
              <p className="text-center text-white">No results found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
