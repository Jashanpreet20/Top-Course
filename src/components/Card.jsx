import React, { useState } from "react";
import Item from "./Item";
export default function Card({ courses, category, setCategory }) {
  
  function getcoures() {
    if (category === "All") {
      let allcourses = [];

      Object.values(courses).forEach((array) => {
        array.forEach((coursedata) => {
          allcourses.push(coursedata);
        });
      });
      return allcourses;
    } else {
      return courses[category];
    }
  }
  return (
    <div className="grid grid-cols-3 gap-4 mb-4">
      {getcoures().map((course) => (
        <Item
          key={course.id}
          item={course}
          
        />
      ))}
    </div>
  );
}
