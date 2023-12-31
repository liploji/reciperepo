import React from "react";
import style from "../Styles/recipecard.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {calories.toFixed()}</p>
      <img className={style.image} src={image} alt="recipe image" />
    </div>
  );
};

export default Recipe;
