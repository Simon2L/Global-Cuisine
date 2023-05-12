import React from 'react'


  // fetch
  const getRecipes = async (search, region, mealtype, diet, intolerance) => {
    const apiKey = "22fc971864984ed2a26294d71e05109b";

    const PrintFilters = (array) => {
        let filterString = "";
        array.forEach((element) => {
          filterString += `${element}, `;
        });
    
        return filterString.slice(0, -2); // slice tar bort sista kommatecknet så den sista filtret funkar
      };

    try {
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`
      +`&query=${search}&cuisine=${PrintFilters(region)}&` +
        `type=${PrintFilters(mealtype)}&` +
        `diet=${PrintFilters(diet)}&` +
        `intolerances=${PrintFilters(intolerance)}&` +
        `addRecipeInformation=true&addRecipeNutritionadd=true&fillIngredients=true&number=100`;
      const response = await fetch(url);
      const result = await response.json();
      console.log(result)
      return result

     
    } catch (e) {
      console.log(e);
    }
  };

export default getRecipes