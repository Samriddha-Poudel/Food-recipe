function searchrecipie(){
    const searchInput=document.getElementById("search-input").value;
    const recipesdiv=document.getElementById("recipes");
    const notfounddiv=document.getElementById("notfound");


if(searchInput.trim()=== ""){
    notfounddiv.innerHTML="Please enter a recipie .";
    notfounddiv.style.display="block";
    return
}


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
<button onclick="viewrecipes('${meal.idMeal}')"> View Recipes</button>

                `;
                recipesdiv.appendChild(card);
            });
            
            
        }
    })
}


function viewrecipes(mealID){

    const popup=document.getElementById("popup");
    const recipietitle=document.getElementById("recipietitle");
    const recipiedetails=document.getElementById("details");

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)

.then (response => response.json())
.then (data => {

    const meal=data.meals[0];
    recipietitle.innerText = meal.strMeal;
    recipiedetails.innerText= meal.strInstructions;
popup.style.display="block";
})




}
