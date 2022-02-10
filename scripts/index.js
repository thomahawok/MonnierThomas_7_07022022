function displayData () {
    console.log(recipes[1].ingredients)

  
    const cardSection = document.getElementById('cardSection')
    recipes.forEach(recipe => {
      const TemplateRecipes = new RecipesCard(recipe)
      
      cardSection.appendChild(TemplateRecipes.createReipesCard())
    })
    
    
  }
  
  displayData()

  