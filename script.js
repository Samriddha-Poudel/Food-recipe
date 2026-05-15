function searchrecipie(){
    const searchInput=document.getElementById("search-input").value;
    const recipesdiv=document.getElementById("recipes");
    const notfounddiv=document.getElementById("notfound");

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
    .then(response => response.json())
    .then(data => {
        if(!data.meals){
            recipesdiv.innerHTML="";    
            notfounddiv.innerHTML="Recipe not found !"
            notfounddiv.style.display="block";
        }

        else{
            recipesdiv.innerHTML = "";
            notfounddiv.style.display = "none";
            data.meals.forEach(meal=>{

                const card= document.createElement("div");
                card.classList.add("recipe-card")

                card.innerHTML=`
<img src="${meal.strMealThumb}" alt="${meal.strMeal}">
<h3>${meal.strMeal} </h3>
<button> View Recipes</button>

                `;
                recipesdiv.appendChild(card);
            });
            
            
        }
    })
}