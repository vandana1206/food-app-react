import { Fragment } from "react";
import foodImg from "../../assets/food.jpeg";
import classes from "./Header.module.css";
import HeaderCardBtn from "./HeaderCartButton";

const Header = (props) => {
  console.log("Header");
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Mall</h1>
        <HeaderCardBtn onClick={props.onshowCart}/>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={foodImg} alt=" A Very delicious....!" />
      </div>
    </Fragment>
  );
};
export default Header;
