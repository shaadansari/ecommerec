import React,  { useContext } from "react";
import ProductDetails from "../data/ProductData";
import { useParams } from "react-router-dom";
import ProductComponent from "../component/ProductComponent";


import { ProductContext } from "../Context";


function Product() {

  const { category, type } = useParams();
  

  const { productDetail } = useContext(ProductContext);

  const categor =  productDetail.filter(
    (product) => product.category === category
  );
  


  const typ =  productDetail.filter((product) => product.type === type);
  // console.log(typ);
  let condition =
    typ.length > 0 ? typ : categor.length > 0 ? categor : ProductDetails;
  // console.log(condition);

  const productElements = condition.map((product) => (
    <ProductComponent key={product.id} {...product} />
  ));

  return (
    <>
      <div className="div-shirt">{productElements}</div>
      
    </>
  );
}

export default Product;
