import { useState } from "react";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import { TRENDING_ALL } from "../../../utils/apiUrl";
import Carousel from "../../../components/carousel/Carousel";

const Trending = () => {
  const [endpoint, setEndPoint] = useState("day");
  const { data, loading } = useFetch(`${TRENDING_ALL}${endpoint}`);

  const onTabChange = (tab) => {
    setEndPoint(tab.toLowerCase()); // api url has lower case
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
