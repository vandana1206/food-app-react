import classes from './MealSummary.module.css'

const MealSummary = () => {
  console.log("MealSummary");
  return (
    <div>
      <section className={classes.summary}> 
        
        <h2>Food Delivers to you....!!!!</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </section>
    </div>
  );
};

export default MealSummary;
