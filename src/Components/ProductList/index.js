import { useState } from "react";
const ProductList = ({
  handleClick,
  useProduct,
  setRandomItem,
  randomItem,
}) => {
  const [showItem, setShowItem] = useState(false);

  const generate = () => {
    const random = Math.round(Math.random() * (6 - 1) + 1);
    const newDiscount = Math.round(Math.random() * (90 - 40) + 40);
    setShowItem(true);
    const newItem = useProduct.filter((product) => product.id === random);
    const newItem2 = {
      id: newItem[0].id,
      name: newItem[0].name,
      price: newItem[0].price,
      discount: newDiscount,
    };
    setRandomItem(newItem2);
  };

  return (
    <div>
      <span>Produtos</span>
      {showItem && (
        <div>
          <h3>{randomItem.name}</h3>
          <span>Preco: R${randomItem.price}</span>
          <span>Desconto: {randomItem.discount.toFixed(2)}%</span>
          <span>
            Valor do desconto: R$
            {((randomItem.price * randomItem.discount) / 100).toFixed(2)}
          </span>
          <h4>
            Preco do item com desconto: R$
            {(
              randomItem.price -
              (randomItem.price * randomItem.discount) / 100
            ).toFixed(2)}
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
