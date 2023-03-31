const APP_ID = "06e5d752";
const API_KEY = "1de0f2c22fda19fb4cdf80a249ac7818";
const userSearch = "steak";



//getall recepies by searchword
fetch(`https://api.edamam.com/api/recipes/v2?app_id=${APP_ID}&app_key=${API_KEY}&q=${userSearch}&type=any&cuisineType=American`)
    .then((response) => response.json())
    .then((json) => {
        const ul = document.querySelector("#postlist");
        console.log(json);
        json.hits.forEach((hit) => {
            console.log(hit);
            const li = document.createElement("li");
            const img = document.createElement("img");
            const textnode = document.createTextNode(hit.recipe.label);
            img.setAttribute("src", hit.recipe.image);
            li.appendChild(img);
            li.appendChild(textnode);
            ul.appendChild(li);
        });
    });



// function submitSearch(data){
//    let userSearch = "";
//    console.log(data);
//    if(data){
//      userSearch = data;
//    }
//    else{
//      userSearch = "chicken";
//    }
//    getByUserSearch(userSearch);
// }

// function getByUserSearch(userSearch){
//     fetch(`https://api.edamam.com/api/recipes/v2?app_id=${APP_ID}&app_key=${API_KEY}&q=${userSearch}&type=any&cuisineType=American`)
//     .then((response) => response.json())
//     .then((json) => {
//         const ul = document.querySelector("#postlist");
//         console.log(json);
//         json.hits.forEach((hit) => {
//             console.log(hit);
//             const li = document.createElement("li");
//             const img = document.createElement("img");
//             const textnode = document.createTextNode(hit.recipe.label);
//             img.setAttribute("src", hit.recipe.image);
//             li.appendChild(img);
//             li.appendChild(textnode);
//             ul.appendChild(li);
//         });
//     });
// }
