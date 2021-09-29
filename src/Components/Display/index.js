import ProductList from "../ProductList";
import { useState } from "react";

function Display() {
  const [currentSale, setCurrentSale] = useState([]);
  const [randomItem, setRandomItem] = useState([]);
  const [discount, setdiscount] = useState(0);
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
  const totalPrice =
    currentSale.length > 1 && currentSale.reduce((acc, vl) => acc + vl.price);
  return (
    <>
      <span>DIsplay</span>
      <ProductList
        handleClick={handleClick}
        useProduct={useProduct}
        randomItem={randomItem}
        setRandomItem={setRandomItem}
        discount={discount}
        setdiscount={setdiscount}
      />
      <h5>Preco total: {totalPrice}</h5>
      <ul>
        {currentSale.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <span>Preco: {item.price.toFixed(2)}</span>
            <span>Desconto: {item.discount.toFixed(2)}%</span>
            <span>
              Valor do desconto:{" "}
              {((item.price * item.discount) / 100).toFixed(2)}
            </span>
            <h4>
              Preco do item com desconto:
              {(item.price - (item.price * item.discount) / 100).toFixed(2)}
            </h4>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Display;
