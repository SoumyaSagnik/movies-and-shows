import "./SearchResult.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import noResults from "../../assets/no-results.png";
import { SEARCH_QUERY, SEARCH_PAGE } from "../../utils/apiUrl";
import Spinner from "../../components/spinner/Spinner";
import MovieCard from "../../components/movieCard/MovieCard";

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams(); // as given in App.jsx

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [query]);

  function fetchInitialData() {
    setLoading(true);
    fetchDataFromApi(`${SEARCH_QUERY}${query}${SEARCH_PAGE}${1}`).then(
      (res) => {
        setData(res);
        setPageNum((prev) => prev + 1);
        setLoading(false);
      }
    );
  }

  function fetchNextPageData() {
    fetchDataFromApi(`${SEARCH_QUERY}${query}${SEARCH_PAGE}${pageNum}`).then(
      (res) => {
        if (data?.results) {
          setData({ ...data, results: [...data?.results, ...res?.results] });
        } else {
          setData(res);
        }
        setPageNum((prev) => prev + 1);
      }
    );
  }

  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <ContentWrapper>
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle">{`Search result(s) for '${query}'`}</div>
              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={<Spinner />}
              >
                {data?.results?.map((item, index) => {
                  if (item?.media_type === "person") return;
                  return (
                    <MovieCard key={index} data={item} fromSearch={true} />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <ContentWrapper>
              <div className="pageTitle">{`Search result(s) for '${query}'`}</div>
              <span className="resultNotFound">
                <img src={noResults} alt="0 matches found." />
              </span>
            </ContentWrapper>
          )}
        </ContentWrapper>
      )}
    </div>
  );
};

export default SearchResult;
