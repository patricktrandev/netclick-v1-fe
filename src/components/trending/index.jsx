import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import MovieCard from "./MovieCard";
import Loading from "@pages/Loading";

const TrendingList = ({ title, tabs }) => {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);

  const url = tabs.find((item) => item.id === activeTabId)?.url;
  const { data: trendingResponse, isLoading } = useFetch({
    url,
  });
  const trending = (trendingResponse?.results || []).slice(0, 12);
  if (isLoading) return <Loading />;
  //console.log(trending);
  return (
    <div className="bg-black px-8 py-10 text-[1.3vw] text-white lg:px-40 lg:text-[1vw]">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex rounded border border-white">
          {tabs.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => setActiveTabId(item.id)}
                className={`cursor-pointer rounded ${item.id == activeTabId ? "bg-white text-black" : ""} px-2 py-1`}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        {trending?.map((item) => {
          return (
            <MovieCard
              key={item.id}
              id={item.id}
              media={item.media_type}
              poster={item.backdrop_path}
              title={item.title || item.name}
              releaseDate={item.release_date || item.first_air_date}
              point={item.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TrendingList;
