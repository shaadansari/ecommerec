import React, { useContext } from "react";
import {
  
  MdOutlineFavoriteBorder,
  MdOutlineFavorite,
  
} from "react-icons/md";

import { Link } from "react-router-dom";
import { ProductContext } from "../Context";


function ProductComponent({ id, image, price, category, type, isFavorite }) {

   const { addWish, productDetail } = useContext(ProductContext);
  console.log(productDetail);
  
  


  return (
    <div className="div-productcomponent">
      <Link to={`/${category}/${type}/${id}-detailpage`}>
        <div>
          <img src={image} alt="" />
          <h4>Brand : Levi's</h4>
          <h4>Size : M</h4>
          <h4>price : {price}</h4>
        </div>
      </Link>
      {isFavorite ? (
        <button className="wishbutton-clicked">
          <span>
            <MdOutlineFavorite />
          </span>
          wishlist
        </button>
      ) : (
        <button onClick={() => addWish(id)}>
          <span>
            <MdOutlineFavoriteBorder />
          </span>
          wishlist
        </button>
      )}
    </div>
  );
}

export default ProductComponent;
