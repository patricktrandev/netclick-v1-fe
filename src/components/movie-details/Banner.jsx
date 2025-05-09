import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CircularProgressbar from "../trending/CircularProgressbar";
import { useModalContext } from "../../context/ModalProvider";
import PopupFrameVideo from "../common/PopupFrameVideo";

const Banner = ({
  title,
  poster,
  backdrop,
  certification,
  groupCrews,
  release,
  genres,
  votes,
  overview,
  trailerKey,
}) => {
  const { openPopup } = useModalContext();

  return (
    <div className="relative overflow-hidden text-white">
      <div className="absolute">
        <img
          src={
            poster
              ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster}`
              : `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${backdrop}`
          }
          alt="iron"
          className="inset-0 max-h-[50vh] w-[100vw] brightness-[.2] sm:max-h-[80vh] sm:min-h-[65vh]"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-10 sm:gap-12">
        <div className="flex-1">
          <img
            src={
              backdrop
                ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${backdrop}`
                : `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster}`
            }
            alt="man"
            className="rounded-2xl"
          />
        </div>

        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-lg font-bold lg:text-2xl">{title}</p>
          <div className="flex items-center gap-4">
            {certification && (
              <span className="border border-gray-400 p-1 text-gray-400">
                {certification}
              </span>
            )}

            <p>{release}</p>
            <p>{(genres || []).map((item) => item.name).join(", ")}</p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressbar
                percent={Math.round(votes * 10)}
                strokeColor={
                  Math.round(votes) > 7
                    ? "green"
                    : Math.round(votes) > 5
                      ? "orange"
                      : "red"
                }
              />
              Rating
            </div>
            <button
              className="cursor-pointer rounded border p-2 text-white hover:rounded hover:bg-red-700"
              onClick={() => {
                openPopup(
                  <PopupFrameVideo
                    url={`https://www.youtube.com/embed/${trailerKey}`}
                  />,
                );
              }}
            >
              <FontAwesomeIcon icon={faPlay} className="mr-2" />
              Trailer
            </button>
          </div>
          <div>
            <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
            <p>{overview}</p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            {Object.keys(groupCrews).map((item) => {
              return (
                <div key={item}>
                  <p className="font-bold">{item}</p>
                  <p>{groupCrews[item].map((c) => c.name).join(", ")}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
