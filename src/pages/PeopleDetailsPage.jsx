import React from "react";
import PeopleDetails from "./../components/people-details/index";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";

const PeopleDetailsPage = () => {
  const { id } = useParams();
  const { data: personInfo, isLoading } = useFetch({
    url: `/person/${id}?append_to_response=combined_credits`,
  });
  if (isLoading) return <Loading />;
  return (
    <div>
      <PeopleDetails personInfo={personInfo} />
    </div>
  );
};

export default PeopleDetailsPage;
