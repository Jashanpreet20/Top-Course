import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useState } from "react";
import { ThemeContext } from "../Context/ThemeProvider";
export default function Item({ item }) {

  const [likedCourse, setLikedCourse] = useState([]);

  const {theme}=useContext(ThemeContext);
  function handleLike() {
    if (likedCourse.includes(item.id)) {
      setLikedCourse((prev) => prev.filter((cid) => cid !== item.id));
      toast.error("liked removed");
    } else {
      if (likedCourse.length === 0) {
        setLikedCourse([item.id]);
      } else {
        setLikedCourse((prev) => [...prev, item.id]);
      }
      toast.success("liked successfully");
    }
  }

  return (
    <div className={`w-[300px] flex flex-col items-startrounded-md overflow-hidden ${theme === 'dark' ? "bg-dark" : "bg-light"}`}>
      <div className="relative">
        <img src={item.image.url} alt="image" />
        <div className="w-[40px] h-[40px] absolute right-1 rounded-md bg-transparent bottom-[-2px] grid place-content-center">
          <button onClick={handleLike}>
            {likedCourse.includes(item.id) ? (
              <FcLike fontSize={30} />
            ) : (
              <FcLikePlaceholder fontSize={30} />
            )}
          </button>
        </div>
      </div>

      <div className={`flex flex-col px-2 py-2 ${theme === "dark" ? "text-light" : "text-dark"} text-[16px]`}>
        <p className="font-bold  leading-6">{item.title}</p>
        <p>
          {item.description.length > 100
            ? item.description.substr(0, 100) + "..."
            : item.description}
        </p>
      </div>
    </div>
  );
}
