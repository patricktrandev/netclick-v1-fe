import { Avatar, Badge, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import ActorInfo from "../movie-details/ActorInfo";
import RelatedMediaList from "../movie-details/RelatedMediaList";
import Loading from "../../pages/Loading";
import "./discover.css";
const items = [
  {
    key: "movie",
    label: "Movie",
    count: 0,
    children: [],
  },
  {
    key: "tv",
    label: "TV Show",
    count: 0,
    children: [],
  },
  {
    key: "person",
    label: "Person",
    count: 0,
    children: [],
  },
];
const DiscoverSearch = ({ keyword }) => {
  const [activeTab, setActiveTab] = useState("movie");

  const { data: relatedMovie, isLoading: isRelatedMediaListLoading } = useFetch(
    {
      url: `/search/movie?query=${keyword}`,
    },
  );

  const { data: relatedTv } = useFetch({
    url: `/search/tv?query=${keyword}`,
  });
  const { data: people } = useFetch({
    url: `/search/person?query=${keyword}`,
  });

  useEffect(() => {}, [keyword]);
  const handleTabChange = (key) => {
    setActiveTab(key);
  };
  if (isRelatedMediaListLoading) return <Loading />;
  if (keyword == "")
    return (
      <div className="container my-10 flex justify-center">
        <p>There are no movies that matched your query. Try again!</p>
      </div>
    );
  return (
    <div>
      <div className="container">
        <Tabs activeKey={activeTab} type="card" onChange={handleTabChange}>
          {items.map((item) => {
            return (
              <TabPane tab={item.label} key={item.key}>
                {activeTab == "person" ? (
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                    {people.results.length > 0 ? (
                      people.results.map((item) => {
                        return (
                          <ActorInfo
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            character={item.character}
                            profile={item.profile_path}
                            episode={item.episodeCount}
                          />
                        );
                      })
                    ) : (
                      <p className="font-italic">No actors to show</p>
                    )}
                  </div>
                ) : (
                  <RelatedMediaList
                    mediaList={
                      activeTab == "movie"
                        ? relatedMovie.results || []
                        : relatedTv.results || []
                    }
                  />
                )}
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default DiscoverSearch;
