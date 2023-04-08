import "./Details.scss";
import { VIDEOS, CREDITS } from "../../utils/apiUrl";

import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}${VIDEOS}`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}${CREDITS}`
  );
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
