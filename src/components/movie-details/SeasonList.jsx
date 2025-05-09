import React, { useState } from "react";
import ImageComponent from "../common/Image";
import CircularProgressbar from "../trending/CircularProgressbar";

const SeasonList = ({ seasons = [] }) => {
  const [isShow, setIsShow] = useState(false);

  const currentSeasons = isShow ? seasons : seasons.slice(0, 3);
  return (
    <div className="mt-8 text-[1.3vw]">
      <p className="mb-4 text-[1.4vw] font-bold">Seasons </p>
      <div className="space-y-4">
        {currentSeasons.map((item) => {
          return (
            <div
              key={item.id}
              className="flex gap-4 rounded-lg border border-slate-200 p-3 shadow-md"
            >
              <div className="flex-1">
                <ImageComponent
                  width={190}
                  height={195}
                  classname={"rounded-lg w-[160px] h-[195px]"}
                  url={`https://image.tmdb.org/t/p/w130_and_h195_face${item.poster_path}`}
                />
              </div>
              <div className="flex-[3] space-y-1">
                <div className="flex justify-between">
                  <p className="text-[1.4vw] font-bold">{item.name}</p>
                  <div className="flex items-center gap-2">
                    <p>Rating</p>
                    <CircularProgressbar
                      percent={Math.round(item.vote_average * 10)}
                      strokeColor={
                        item.vote_average > 7
                          ? "green"
                          : item.vote_average > 5
                            ? "orange"
                            : "red"
                      }
                    />
                  </div>
                </div>

                <p className="text-[1.1vw]">
                  <span className="font-bold">Release Date:</span>{" "}
                  {item.air_date}
                </p>
                <p className="text-[1vw]">{item.episode_count} Episodes</p>
                <p className="text-[1vw]">{item.overview}</p>
              </div>
            </div>
          );
        })}
        {seasons.length > 3 && (
          <p
            className="cursor-pointer text-[1.1vw] hover:text-red-500"
            onClick={() => setIsShow(!isShow)}
          >
            {isShow ? "Show less" : "Show more"}
          </p>
        )}
      </div>
    </div>
  );
};

export default SeasonList;
