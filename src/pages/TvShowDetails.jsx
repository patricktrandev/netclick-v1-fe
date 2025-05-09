import ActorList from "@components/movie-details/ActorList";
import Banner from "@components/movie-details/Banner";
import useFetch from "@hooks/useFetch";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { groupBy } from "lodash";
import RelatedMediaList from "../components/movie-details/RelatedMediaList";
import TvShowInformation from "./../components/movie-details/TvShowInformation";
import SeasonList from "../components/movie-details/SeasonList";

const TvShowDetails = () => {
  const { id } = useParams();

  const { data: tvInfo, isLoading } = useFetch({
    url: `/tv/${id}?append_to_response=content_ratings,aggregate_credits,videos`,
  });
  const { data: relatedMovie } = useFetch({
    url: `/tv/${id}/recommendations`,
  });
  if (isLoading) return <Loading />;
  //console.log(tvInfo);
  const certification = (tvInfo.content_ratings?.results || []).filter(
    (item) => item.iso_3166_1 == "US",
  );
  const crews = (tvInfo.aggregate_credits?.crew || [])
    .filter((c) => {
      const jobs = (c.jobs || []).map((j) => j.job);
      return ["Writer", "Director"].some((item) =>
        jobs.find((job) => job === item),
      );
    })
    .map((crew) => ({
      id: crew.id,
      job: crew.jobs[0].job,
      name: crew.name,
    }));
  const groupCrews = groupBy(crews, "job");
  const currentRelatedMovies = (relatedMovie.results || []).slice(0, 8);
  //console.log(crews);
  return (
    <div>
      <Banner
        title={tvInfo.name}
        poster={tvInfo.poster_path}
        backdrop={tvInfo.backdrop_path}
        certification={certification[0]?.rating}
        groupCrews={groupCrews}
        release={tvInfo.first_air_date}
        genres={tvInfo.genres}
        votes={tvInfo.vote_average}
        overview={tvInfo.overview}
        trailerKey={
          (tvInfo.videos?.results || []).find((item) => item.type == "Trailer")
            ?.key
        }
      />
      <div className="text-[1.2vw]">
        <div className="container">
          <div className="flex-[2]">
            <ActorList
              actors={(tvInfo.aggregate_credits?.cast || []).map((cast) => ({
                ...cast,
                character: cast.roles[0]?.character,
                episodeCount: cast.roles[0]?.episode_count,
              }))}
            />
            <br />
            <SeasonList seasons={(tvInfo.seasons || []).reverse()} />
            <br />
            <RelatedMediaList mediaList={currentRelatedMovies || []} />
          </div>
          <div className="flex-1">
            <TvShowInformation tvInfo={tvInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvShowDetails;
