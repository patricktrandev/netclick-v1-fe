import React from "react";
import CircularProgressbar from "./CircularProgressbar";
import { Link } from "react-router-dom";
import Image from "../common/Image";
import ImageComponent from "../common/Image";

const MovieCard = ({ poster, title, releaseDate, point, media, id }) => {
  //console.log({ media });
  return (
    <Link
      to={media == "tv" ? `/tv-show/${id}` : `/movie/${id}`}
      className="rounded-lg border border-slate-800"
    >
      <div className="relative cursor-pointer">
        {media == "tv" && (
          <p className="absolute top-1 right-0 rounded bg-amber-600 p-1 text-sm font-bold text-white shadow-amber-200">
            TV Show
          </p>
        )}
        <ImageComponent
          url={
            poster
              ? `https://image.tmdb.org/t/p/original${poster}`
              : "/default.svg"
          }
          width={320}
          height={350}
          classname={"rounded-lg lg:w-[100%] lg:h-[12vw]"}
        />

        <div className="relative top-[-30px] min-h-20 px-4 py-2">
          <CircularProgressbar
            percent={Math.round(point * 10)}
            strokeColor={point > 7 ? "green" : point > 5 ? "orange" : "red"}
          />
          <div>
            <p className="mt-2 font-medium">{title}</p>
            <p className="text-slate-300">{releaseDate}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
