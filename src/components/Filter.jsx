import React from "react";

export default function Filter({ filterData, category, setCategory }) {
  function categoryHandler(title) {
    setCategory(title);
  }
  return (
    <div className=" w-11/12 flex items-center justify-center gap-3 mx-auto py-4 ">
      {filterData.map((data) => (
        <button
          onClick={() => categoryHandler(data.title)}
          className={`bg-gray-600 hover:bg-black hover:border-2 transition-all duration-300
           rounded-md px-3 py-2 mt-2 text-xl text-white ${
             data.title === category && "border-2 border-red-600"
           }`}
          key={data.id}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
}
