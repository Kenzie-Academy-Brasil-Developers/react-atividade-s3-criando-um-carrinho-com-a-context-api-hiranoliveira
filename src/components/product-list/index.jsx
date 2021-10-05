import Button from "../button";

import { useContext } from "react";

import { CatalogueContext } from "../../providers/catalogue";
import { CartContext } from "../../providers/cart";

import "./styles.css";

const ProductList = ({ type }) => {
  // type determinará se nosso componente será do tipo "catalogue" ou "cart"
  // veremos melhor como isso irá funcionar quando formos para nosso App.js
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
    <>
      <ul className="lista">
        {type === "catalogue" &&
          catalogue.map((item, index) => (
            <li key={index} className="item">
              {item.name} <Button type={type} item={item} />
            </li>
          ))}
        {type === "cart" &&
          cart.map((item, index) => (
            <li key={index} className="item">
              <p>!Esse item está no carrinho!</p>
              {item.name} <Button type={type} item={item} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default ProductList;
