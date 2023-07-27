import { Item } from "../Item/Item";
import "./ItemListContainer.css";


export const ItemListContainer = ({ products }) => (
    <div className="item-list">
      {products.map((product) => (
        <Item
          key={product.id}
          // Normal
          id={product.id}
          img={product.img}
          category={product.category}
          title={product.title}
          price={product.price}
          // {...product}
        />
      ))}
    </div>
  );