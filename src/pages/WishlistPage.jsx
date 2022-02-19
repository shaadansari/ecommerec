import React, { useContext } from "react";
import { ProductContext } from "../Context";
// import ProductData from "../data/ProductData";
// import { Link } from "react-router-dom";
function WishlistPage() {
  const { Wishlist, removeWish } = useContext(ProductContext);
  console.log(Wishlist);

  const wishList = Wishlist.map((product) => (
    <div key={product.id}>
      <img
        src={product.image}
        alt="photo"
      />
      <button onClick={() => removeWish(product.id)} />
    </div>
  ));

  return (
    <>
      <h1> i m wishlist page</h1>
      <div>{wishList}</div>
    </>
  );
}

export default WishlistPage;
