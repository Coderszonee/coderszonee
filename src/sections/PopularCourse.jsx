import React from "react";
import { courseCardDetail } from "../constants/courseCardDetail";
import { Link } from "react-router-dom";
import CardCourse from "../components/CardCourse";

const PopularCourse = () => {
  return (
    <section className=" px-20 pt-6 pb-10 max-sm:p-2">
      <h1
        className="font-extrabold text-6xl text-center py-20 max-sm:text-3xl max-sm:p-2 max-md:text-5xl"
      >
        Popular <span className="text-orange-600"> Courses </span>
      </h1>
      <div className=" grid gap-4 xl:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {courseCardDetail.map((detail) => (
          <CardCourse 
            id={detail.id}
            key={detail.key}
            courseBanner={detail.courseBanner}
            courseTitle={detail.courseTitle}
            author={detail.author}
          />
        ))}
      </div>
      <div className="p-10 flex justify-center items-center max-sm:p-6">
        <Link
          to="/courses"
          className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-bold rounded-lg text-sm px-10 py-4 text-center mr-2 mb-2"
        >
          Browse More Courses
        </Link>
        
      </div>
    </section>
  );
};

export default PopularCourse;
