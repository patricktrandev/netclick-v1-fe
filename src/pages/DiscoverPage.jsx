import React from "react";
import DiscoverSearch from "../components/discover";
import { useSearchParams } from "react-router-dom";
import DiscoverForm from "../components/carousel/DiscoverForm";

const DiscoverPage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  return (
    <div>
      <DiscoverForm />
      <DiscoverSearch keyword={keyword} />
    </div>
  );
};

export default DiscoverPage;
