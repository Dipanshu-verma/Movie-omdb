import React from "react";
import MovieSearch from "../Home/MovieSearch";
 

const Navbar = () => {
  return (
    <div className="flex justify-between  items-center py-4 pl-8 bg-gray-800 text-white">
      <div className="text-2xl font-bold hidden sm:block">MovieApp</div>
     <MovieSearch/>
    </div>
  );
};

export default Navbar;
