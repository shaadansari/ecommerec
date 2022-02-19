import React,  { useContext } from "react";
import { useParams } from "react-router-dom";
// import ProductData from "../data/ProductData";

import {
  MdGrade,
  MdOutlineLocalMall,
  MdOutlineFavoriteBorder,
  MdOutlineFavorite,
 
} from "react-icons/md";

import { ProductContext } from "../Context";

function ProductDetail() {
  const { id } = useParams();

  const { addWish, productDetail } = useContext(ProductContext);
  

  const detail = productDetail.filter((product) => product.id == id);
    

  return (
    <div className="div-detailpage">
      <img src={detail[0].image} alt="photo" />
      <div>
        <h2>Title: {detail[0].title}</h2>
        <h3>Category: {detail[0].category}</h3>
        <h3>Type: {detail[0].type}</h3>
        <h4>Description: {detail[0].description}</h4>
        <h4>
          <span>
            rating: {detail[0].rating.rate}
            <MdGrade />
          </span>
          <span>count: {detail[0].rating.count}</span>
        </h4>
        <span>
          <button>
            <span>
              <MdOutlineLocalMall />
            </span>
            add to bag
          </button>
          {detail[0].isFavorite ? (
        <button className="wishbutton-clicked">
          <span>
            <MdOutlineFavorite />
          </span>
          wishlist
        </button>
      ) : (
        <button onClick={() => addWish(detail[0].id)}>
          <span>
            <MdOutlineFavoriteBorder />
          </span>
          wishlist
        </button>
      )}
        </span>
      </div>
    </div>
  );
}

export default ProductDetail;
