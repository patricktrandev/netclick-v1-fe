import React from "react";
import MovieCard from "@components/trending/MovieCard";

const RelatedMediaList = ({ mediaList = [], title }) => {
  return (
    <div>
      {title && mediaList.length > 0 && (
        <p className="mb-4 text-[1.4vw] font-bold">{title}</p>
      )}

      <div className="grid grid-cols-4 gap-3">
        {mediaList.map((item) => {
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

export default RelatedMediaList;
