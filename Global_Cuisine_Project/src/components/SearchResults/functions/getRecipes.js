
  // fetch
  const getRecipes = async (search, option, offset) => {
    const apiKey = "8e011ed87d6c477ab42558ec7da511cc";

    const PrintFilters = (array) => {
        let filterString = "";
        array.forEach((element) => {
          filterString += `${element}, `;
        });
    
        return filterString.slice(0, -2); // slice tar bort sista kommatecknet så den sista filtret funkar
      };

    try {
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`
      +`&query=${search}&cuisine=${PrintFilters(option.region)}&` +
        `type=${PrintFilters(option.mealtype)}&` +
        `diet=${PrintFilters(option.diet)}&` +
        `intolerances=${PrintFilters(option.intolerance)}&` +
        `addRecipeInformation=true&addRecipeNutritionadd=true&fillIngredients=true&number=24&offset=${offset}`;
      const response = await fetch(url);
      const result = await response.json();
      console.log(result)
      return result

     
    } catch (e) {
      console.log(e);
    }
  };

export default getRecipes