import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DiscoverInput = ({ onChange, name }) => {
  return (
    <div className="m-3">
      <input
        name={name}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            const value = e.target.value;
            onChange(value);
          }
        }}
        className="border-white-400 h-[5vh] w-[50vw] rounded-l-3xl border-0 bg-white p-5 outline-0"
        type="text"
        placeholder="Search for a movie, tv show, person..."
      />
      <div
        style={{ float: "right" }}
        className="flex h-[5vh] cursor-pointer items-center rounded-r-3xl border-0 bg-white px-4 text-red-500"
      >
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
};

export default DiscoverInput;
