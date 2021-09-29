import ProductList from "../ProductList";
import { useState } from "react";

function Display() {
  const [currentSale, setCurrentSale] = useState([]);
  const [randomItem, setRandomItem] = useState([]);

  const [useProduct, setProduct] = useState([
    { id: 1, name: "Smart TV LED 50", price: 1999.0 },
    { id: 2, name: "PlayStation 5", price: 12000.0 },
    { id: 3, name: "Notebook Acer Nitro 5", price: 5109.72 },
    { id: 4, name: "Headset s fio Logitech G935", price: 1359.0 },
    { id: 5, name: "Tablet Samsung Galaxy Tab S7", price: 4844.05 },
    { id: 6, name: "Cadeira Gamer Cruiser Preta FORTREK", price: 1215.16 },
  ]);
  const handleClick = (item) => {
    setCurrentSale([...currentSale, item]);
  };
  const totalPrice = currentSale.reduce((acc, vl) => {
    return acc + vl.price - vl.discount;
  }, 0);

  return (
    <>
      <span>DIsplay</span>
      <ProductList
        handleClick={handleClick}
        useProduct={useProduct}
        randomItem={randomItem}
        setRandomItem={setRandomItem}
      />
      <h5>Preco total: {totalPrice.toFixed(2)}</h5>
      <ul>
        {currentSale.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <span>Preco: R${item.price.toFixed(2)}</span>
            <span>Desconto: {item.discount.toFixed(2)}%</span>
            <span>
              Valor do desconto:{" "}
              {((item.price * item.discount) / 100).toFixed(2)}
            </span>
            <h4>
              Preco do item com desconto: R$
              {(item.price - (item.price * item.discount) / 100).toFixed(2)}
            </h4>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Display;
