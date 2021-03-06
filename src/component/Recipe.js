import React from 'react';

const Recipe = props =>(
  <div className="container">
  <div className="row">
    { props.recipes.map((recipe)=>{
        return (
            <div key={recipe.title} className="col-md-4 recipe_heading" >
              <div className="recipe__box">
                <img className="recipe__box-img" src ={recipe.image_url} alt="recipe.title" />
              </div>
              <div className="recipe__text">
                <h5 className="recipes__title">
                { recipe.title.length < 20 ? `${recipe.tittle}` : `${recipe.title.substring(0,25)}...`}
                </h5>
                <p className="recipes__subtitile"> Publisher:<span>{recipe.publisher}</span></p>
              </div>
              <button className="recipe_buttons">View Recipe</button>
            </div>
        );
     })}
  </div>
</div>
);

export default Recipe;
