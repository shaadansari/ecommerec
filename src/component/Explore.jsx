import React from "react";
import { Link } from "react-router-dom";

const Component = () => {
  return (
    <div className="component-1">
      <div className="component">
        <h3>Shirt</h3>
        <img src="./images/shirt/casual/4.jpg" alt="shirt4" />
        <Link to="/shirt">explore</Link>
      </div>
      <div className="component">
        <h3>T-Shirt</h3>
        <img src="./images/tshirt/printed/3.jpg" alt="tshirt3" />
        <Link to="/tshirt">explore</Link>
      </div>
      <div className="component">
        <h3>Jeans</h3>
        <img src="./images/jeans/denim/1.jpg" alt="jeans1" />
        <Link to="/jeans">explore</Link>
      </div>
      <div className="component">
        <h3>Shoes</h3>
        <img src="./images/shoes/spor/4.jpg" alt="shoes4" />
        <Link to="/shoes">explore</Link>
      </div>
    </div>
  );
};

export default Component;
