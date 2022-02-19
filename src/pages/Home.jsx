import React from "react";

import Component from "../component/Explore";
import Components from "../component/Trending";

function Home() {
  return (
    <div className="home">
      <h2>Categoreies to bag</h2>

      <Component />

      <Components />

      {/* <h2>Trendind in T-shirts</h2>

      <Components />

      <h2>Trendind in Jeans</h2>

      <Components />

      <h2>Trendind in Shoes</h2>

      <Components /> */}
    </div>
  );
}

export default Home;
