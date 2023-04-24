
// const handleSubmit = (e) => {
//     e.preventDefault();
//     getRecipes();
//   };

// const getRecipes = async () => {
//     try {
//         const url = `https://api.spoonacular.com/recipes/complexSearch/query=pasta`;
//         const response = await fetch(url);
//         const result = await response.json();
//         console.log(result);
//         //setRecipes(result);
//       } catch (e) {
//         console.log(e);
//       }
// }
const Fetch = (props) => {

  const resultArray = [];

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   getRecipes();
  //   console.log(props.search);
  // }
  
  const getRecipes = async () => {
    const apiKey = 'ca68133f5df34a13b64e53f977918ba8';
    try {
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${props.search}`;
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        resultArray.push(result.results);
        console.log(resultArray);
      } catch (e) {
        console.log(e);
      }
      return resultArray;
  }

  return <p>{getRecipes()}</p>

}


export default Fetch;