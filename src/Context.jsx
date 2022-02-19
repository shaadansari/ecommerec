import { set } from "lodash";
import React, { useState } from "react";
import ProductData from "./data/ProductData";
import Product from "./pages/product";

const ProductContext = React.createContext();

function ProductContextProvider(props) {
  const [Wishlist, setWishlist] = useState([]);
  const [productDetail, setProductDetail] = useState(ProductData);
 

  function addWish(id) {

    setWishlist((prevalue) => [
      ...prevalue,
      ProductData.find((Product) => Product.id == id),
    ]);

    toggleFavorite(id)

}

function toggleFavorite(id) {

 const updateArr =  productDetail.map(product => {
      if(product.id == id) {
          return {...product, isFavorite: !product.isFavorite}
      }

      return product
      
  })
  
  console.log(id)

  setProductDetail(updateArr)
  
}

  
  function removeWish(id) {
    console.log(id);
    setWishlist((prevalue) => prevalue.filter((Product) => Product.id !== id));
  }

  return (
    <ProductContext.Provider
      value={{ addWish, Wishlist, removeWish, productDetail }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductContextProvider };
