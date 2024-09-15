import React, { useContext } from "react";
import {ThemeContext} from '../Context/ThemeProvider'
export default function Filter({ filterData, category, setCategory }) {

  const {theme}=useContext(ThemeContext);

  function categoryHandler(title) {
    setCategory(title);
  }
  return (
    <div className=" w-11/12 flex items-center justify-center gap-3 mx-auto py-4 ">
      {filterData.map((data) => (
        <button
          onClick={() => categoryHandler(data.title)}
          className={`${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}
           rounded-md px-3 py-2 mt-2 text-xl ${category === data.title && `border-b-2 border-b-orange-500` }
             
           }`}
          key={data.id}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
}
