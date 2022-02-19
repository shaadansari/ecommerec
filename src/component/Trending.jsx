import React from "react";
import { Link } from "react-router-dom";
import TrendingData from "../data/TrendingData";

function Components() {
  const trendingElements = TrendingData.map((value) => (
    <di key={value.category}>
      {" "}
      <h2>Trending in {value.category}</h2>
      <div className="component-2">
        <div className="components">
          <img src={value.image1} alt="shirt" />
          <h3>
            <Link to={`/${value.category}/${value.type1}`}>{value.type1}</Link>
          </h3>
        </div>
        <div className="components">
          <img src={value.image2} alt="shoes1" />
          <h3>
            <Link to={`/${value.category}/${value.type2}`}>{value.type2}</Link>
          </h3>
        </div>
        <div className="components">
          <img src={value.image3} alt="shoes1" />
          <h3>
            <Link to={`/${value.category}/${value.type3}`}>{value.type3}</Link>
          </h3>
        </div>
      </div>
    </di>
  ));

  return <>{trendingElements}</>;
}

export default Components;
