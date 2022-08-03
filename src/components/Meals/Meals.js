import { Fragment } from "react";

import AvailableMeals from "./AvailableMeals";
import MealSummary from "./MealSummary";

const Meals = () => {
  console.log("Meals");
  return (
    <Fragment>
  
      <main>
        <MealSummary/>
        <AvailableMeals />
      </main>
    </Fragment>
  );
};
export default Meals;
