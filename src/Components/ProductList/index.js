import { useState } from "react";
const ProductList = ({
  handleClick,
  useProduct,
  setRandomItem,
  setdiscount,
  randomItem,
  discount,
}) => {
  const [showItem, setShowItem] = useState(false);

  const generate = () => {
    const random = Math.round(Math.random() * (6 - 1) + 1);
    setShowItem(true);
    const newItem = useProduct.filter((product) => product.id === random);
    const newItem2 = {
      id: newItem[0].id,
      name: newItem[0].name,
      price: newItem[0].price,
      discount: discount,
    };
    setRandomItem(newItem2);
    setdiscount(Math.round(Math.random() * (40 - 90) + 40));
  };

  return (
    <div>
      <span>Produtos</span>
      {showItem && (
        <div>
          <h3>{randomItem.name}</h3>
          <span>Preco: {randomItem.price}</span>
          <span>Desconto: {discount.toFixed(2)}%</span>
          <span>
            Valor do desconto: R$
            {((randomItem.price * discount) / 100).toFixed(2)}
          </span>
          <h4>
            Preco do item com desconto:
            {(randomItem.price - (randomItem.price * discount) / 100).toFixed(
              2
            )}
          </h4>
          <button onClick={() => handleClick(randomItem)}>
            Adicionar ao carrinho
          </button>
        </div>
      )}
      <button onClick={generate}>Gerar promo!</button>
    </div>
  );
};

export default ProductList;
