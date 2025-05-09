import useFetch from "@hooks/useFetch";
import Loading from "@pages/Loading";
import React from "react";
import { useParams } from "react-router-dom";
import ActorList from "./ActorList";
import Banner from "./Banner";
import MovieInformation from "./MovieInformation";
import RelatedMediaList from "./RelatedMediaList";
import { groupBy } from "lodash";

const MovieInfoDetails = () => {
  const { id } = useParams();
  const { data: movieInfo, isLoading } = useFetch({
    url: `/movie/${id}?append_to_response=release_dates,credits,videos`,
  });
  const { data: relatedMovie, isLoading: isRelatedMediaListLoading } = useFetch(
    {
      url: `/movie/${id}/recommendations`,
    },
  );
  const certification = (
    (movieInfo.release_dates?.results || []).find(
      (item) => item.iso_3166_1 == "US",
    )?.release_dates || []
  ).find((r) => r.certification)?.certification;
  console.log({ certification });
  const crews = (movieInfo.credits?.crew || [])
    .filter((item) => ["Director", "Screenplay", "Writer"].includes(item.job))
    .map((crew) => ({
      id: crew.id,
      job: crew.job,
      name: crew.name,
    }));

  const groupCrews = groupBy(crews, "job");

  const currentRelatedMovies = (relatedMovie.results || []).slice(0, 8);
  if (isLoading) return <Loading />;
  if (isRelatedMediaListLoading) return <Loading />;
  return (
    <div>
      <Banner
        title={movieInfo.title}
        poster={movieInfo.poster_path}
        backdrop={movieInfo.backdrop_path}
        certification={certification}
        groupCrews={groupCrews}
        release={movieInfo.release_date}
        genres={movieInfo.genres}
        votes={movieInfo.vote_average}
        overview={movieInfo.overview}
        trailerKey={
          (movieInfo.videos?.results || []).find(
            (item) => item.type == "Trailer",
          )?.key
        }
      />
      <div className="text-[1.2vw]">
        <div className="container">
          <div className="flex-[2]">
            <ActorList actors={movieInfo.credits?.cast || []} />
            <br />
            <RelatedMediaList
              title={"More Like This"}
              mediaList={currentRelatedMovies || []}
            />
          </div>
          <div className="flex-1">
            <MovieInformation movieInfo={movieInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfoDetails;
