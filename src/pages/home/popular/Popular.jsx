import { useState } from "react";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import { POPULAR } from "../../../utils/apiUrl";
import Carousel from "../../../components/carousel/Carousel";

const Popular = () => {
  const [type, setType] = useState("movie");
  const { data, loading } = useFetch(`/${type}/${POPULAR}`);

  const onTabChange = (tab) => {
    setType(tab === "Movies" ? "movie" : "tv"); // api url has lower case
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Popular</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={type} />
    </div>
  );
};

export default Popular;
