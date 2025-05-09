import CarouselPanel from "../components/carousel";
import DiscoverForm from "../components/carousel/DiscoverForm";
import Header from "../components/header/Header";
import TrendingList from "../components/trending";
import { topRatedTabs, trendingTabs } from "../libs/constants";

function HomePage() {
  return (
    <div>
      <DiscoverForm />
      <CarouselPanel />
      <TrendingList title={"Trending"} tabs={trendingTabs} />
      <TrendingList title={"Top Rated"} tabs={topRatedTabs} />
    </div>
  );
}

export default HomePage;
