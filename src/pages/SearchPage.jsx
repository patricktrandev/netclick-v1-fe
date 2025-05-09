import { Pagination } from "antd";
import React, { lazy, useState } from "react";
import SearchForm from "../components/search-form";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

const RelatedMediaList = lazy(
  () => import("@components/movie-details/RelatedMediaList"),
);

const SearchPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParam] = useSearchParams();
  const media = searchParam.get("mediaType");
  //console.log(value);
  const [searchFormValues, setSearchFormValues] = useState({
    mediaType: ["movie", "tv"].includes(media) ? media : "movie",
    genres: [],
    ratings: "All",
  });

  //const debouncedSearch = useDebounce(searchFormValues);
  //console.log(searchFormValues);
  // console.log(debouncedSearch);
  const [minVal, maxVal] =
    searchFormValues.ratings === "All"
      ? [0, 100]
      : searchFormValues.ratings.split("-");
  const { data } = useFetch({
    url: `/discover/${searchFormValues.mediaType}?with_genres=${searchFormValues?.genres.join(",")}&vote_average.gte=${minVal / 10}&vote_average.lte=${maxVal / 10}&sort_by=popularity.desc&page=${currentPage}`,
  });

  return (
    <div className="container flex flex-col">
      <p className="text-2xl font-bold">Search</p>
      <div className="flex gap-6">
        <div className="flex-1">
          <SearchForm setSearchFormValues={setSearchFormValues} media={media} />
        </div>
        <div className="flex-[3]">
          <RelatedMediaList mediaList={data.results} />
          {data.results && (
            <div className="my-10 flex justify-end">
              <Pagination
                total={data.total_results}
                showTotal={(total) => `Total ${total} items`}
                pageSize={20}
                defaultCurrent={1}
                showSizeChanger={false}
                onChange={(page) => {
                  setCurrentPage(page);
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
