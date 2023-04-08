import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import { SIMILAR } from "../../../utils/apiUrl";

const Similar = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(`/${mediaType}/${id}${SIMILAR}`);

  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

  function isSimilarPresent(data) {
    return data?.results?.length > 0;
  }

  return (
    <>
      {isSimilarPresent(data) && (
        <Carousel
          title={title}
          data={data?.results}
          loading={loading}
          endpoint={mediaType}
        />
      )}
    </>
  );
};

export default Similar;
