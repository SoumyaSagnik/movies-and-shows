import React from "react";
import "./PageNotFound.scss";
import notFound from "../../assets/no-results.png";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <img src={notFound} alt="Page Doesn't Exist" />
    </div>
  );
};

export default PageNotFound;
