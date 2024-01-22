document.addEventListener("DOMContentLoaded",()=>{

    const APIstem = "https://thecocktaildb.com/api/json/v1/1/search.php?s="

    userInput=document.getElementById("user-input");
    searchBtn=document.getElementById("search-btn");
    
    apiName=document.getElementById("api-name");
    apiImage=document.getElementById("api-image");
    apiCategory=document.getElementById("api-category");
    apiAlcoholic=document.getElementById("api-alcoholic");
    apiInstr=document.getElementById("api-instr");
    
    apiImage.src="images/nothing here.gif";
    
    searchBtn.addEventListener("click",()=>{
        const searchEndpoint = APIstem + userInput.value;
        console.log(searchEndpoint);
        fetch(searchEndpoint)
        .then(response => response.json())
        .then(data=>{
            if (data.drinks !==null) {
                const drinkRecipe = data.drinks[0];
    
                apiName.innerHTML = drinkRecipe.strDrink;
                apiImage.src = drinkRecipe.strDrinkThumb;
                apiCategory.innerHTML = drinkRecipe.strCategory;
                apiAlcoholic.innerHTML = drinkRecipe.strAlcoholic;
                apiInstr.innerHTML = drinkRecipe.strInstructions;
    
                apiImage.style.display="block";
                  
    
                userInput.value="";
            }
        });
    });

});


