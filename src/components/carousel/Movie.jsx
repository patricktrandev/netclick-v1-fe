import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useModalContext } from "../../context/ModalProvider";
import PopupFrameVideo from "../common/PopupFrameVideo";
import { Link } from "react-router-dom";

const Movie = (props) => {
  //console.log(props.movies);
  const { backdrop_path, title, overview, release_date, id } = props.movies;
  const { openPopup } = useModalContext();
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt={""}
        className="aspect-video max-h-150 w-[100%] brightness-50"
        style={{ objectFit: "cover" }}
      />

      <div className="absolute bottom-[10%] left-8 w-1/2 text-white sm:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">{title}</p>
        <div>
          <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
            PG13
          </p>
          <p className="text-[1.2vw]">{release_date}</p>
        </div>
        <div>
          <div className="hidden text-[1vw] sm:block">
            <p className="mb-2 font-bold">Overview</p>
            <p>{overview}</p>
          </div>

          <div className="mt-4">
            <button
              className="cursor-pointer rounded bg-white px-4 py-2 text-[10px] text-black hover:bg-slate-300/35 lg:text-lg"
              onClick={() => {
                openPopup(
                  <PopupFrameVideo
                    url={`https://www.youtube.com/embed/${props.trailerKey}`}
                  />,
                );
              }}
            >
              <FontAwesomeIcon icon={faPlay} />
              Trailer
            </button>
            <Link to={`/movie/${id}`}>
              <button className="mx-3 cursor-pointer rounded bg-slate-300/35 px-4 py-2 text-[10px] text-black hover:bg-red-600 hover:text-white lg:text-lg">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
