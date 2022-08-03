// import { useContext } from "react/cjs/react.production.min";
// import CartContext from "../../../store/cart-context";
// import classes from "./MealItem.module.css";
// import MealItemForm from "./MealItemForm";

// const MealItem = (prop) => {
//   const price = `$${prop.price.toFixed(2)}`;
//   const cartCtx = useContext(CartContext);

//   const addToCartHandler = (amount) => {
//     cartCtx.addItem({
//       id: prop.id,
//       name: prop.name,
//       amount: amount,
//       price: prop.price,
//     });
//   };

//   return (
//     <li className={classes.meal}>
//       <div>
//         <h3>{prop.name}</h3>
//         <div className={classes.description}>{prop.desc}</div>
//         <div className={classes.price}>{price}</div>
//       </div>
//       <div>
//         <MealItemForm id={prop.id} onAddToCart={addToCartHandler} />
//       </div>
//     </li>
//   );
// };

// export default MealItem;
import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
