import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex h-14 items-center justify-between bg-slate-950 px-8 text-white">
      <div className="flex items-center gap-4">
        <Link to="/">
          <img src="/netflix.png" className="w-16 sm:w-28" />
        </Link>

        <Link to={"/search?mediaType=movie"}>Movies</Link>
        <Link to={"/search?mediaType=tv"}>TV Shows</Link>
      </div>
      <div>
        <Link to={"/search"}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
