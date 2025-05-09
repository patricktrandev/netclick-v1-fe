import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import Paginate from "./Paginate";
import useFetch from "@hooks/useFetch";
import Loading from "@pages/Loading";

const CarouselPanel = () => {
  const [activeMovieId, setActiveMovieId] = useState();

  const { data: popularMovies, isLoading } = useFetch({
    url: `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  });
  const movies = (popularMovies.results || []).slice(0, 4);

  const { data: trailerVideos } = useFetch(
    {
      url: `/movie/${activeMovieId}/videos`,
    },
    { enabled: !!activeMovieId },
  );
  //console.log(trailerVideos);
  useEffect(() => {
    if (movies[0]?.id) {
      setActiveMovieId(movies[0]?.id);
    }
  }, [JSON.stringify(movies)]);
  if (isLoading) return <Loading />;
  return (
    <div className="relative">
      {movies
        .filter((m) => m.id == activeMovieId)
        .map((item) => {
          return (
            <Movie
              key={item.id}
              movies={item}
              trailerKey={
                (trailerVideos.results || []).find(
                  (item) => item.type == "Trailer" && item.site == "YouTube",
                )?.key
              }
            />
          );
        })}

      <Paginate
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};

export default CarouselPanel;
