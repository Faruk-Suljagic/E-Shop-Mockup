import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Products.css";

const Products = (props) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);

        setProduct(res.data);
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }, []);
  return (
    <div className="container">
      <div className="wrapper">
        {product.map((products) => (
          <div key={products.id} className="prodCard">
            <p className="price">${products.price}</p>
            <div className="prodImage">
              <img
                src={products.image}
                width="200px"
                height="200px"
                alt={products.title}
              />
            </div>
            <p className="category">{products.category}</p>
            <p className="description">{products.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
