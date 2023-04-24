
const handleSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

const getRecipes = async () => {
    try {
        const url = `https://api.spoonacular.com/recipes/complexSearch/query=pasta`;
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        //setRecipes(result);
      } catch (e) {
        console.log(e);
      }
}

export default handleSubmit;