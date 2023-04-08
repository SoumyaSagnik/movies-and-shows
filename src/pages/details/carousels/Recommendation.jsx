import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import { RECOMMENDATIONS } from "../../../utils/apiUrl";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}${RECOMMENDATIONS}`
  );

  function isRecommendationPresent(data) {
    return data?.results?.length > 0;
  }

  return (
    <>
      {isRecommendationPresent(data) && (
        <Carousel
          title="Recommendations"
          data={data?.results}
          loading={loading}
          endpoint={mediaType}
        />
      )}
    </>
  );
};

export default Recommendation;
