import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Card from "./Card";
import Loading from "./Loading";
import { ThemeContext } from "../Context/ThemeProvider";
import { filterData, apiUrl } from "../Data";
import axios from "axios";
export default function Section() {
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState(filterData[0].title);
  const [loading, setLoading] = useState(false);

  const {theme}=useContext(ThemeContext);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(apiUrl);

        setCourses(res.data.data);
        console.log(res.data.data);
      } catch (err) {
        toast.error("something went wrong");
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div className={`min-h-screen w-full flex flex-col bg-blue-950`}>
      <Navbar />
      <Filter
        filterData={filterData}
        category={category}
        setCategory={setCategory}
      />
      <div className="flex flex-wrap max-w-[1200px] w-11/12 items-center justify-center mx-auto min-h-[50vh]">
        <Card courses={courses} category={category} setCategory={setCategory} />
      </div>
    </div>
  );
}
