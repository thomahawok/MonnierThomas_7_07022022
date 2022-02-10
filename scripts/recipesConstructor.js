class RecipesCard {
    constructor (recipe) {
      this._id = recipe.id
      this._name = recipe.name
      this._servings = recipe.servings
      this._time = recipe.time
      this._description = recipe.description
      this._appilance = recipe.appilance
      this._ingredients = recipe.ingredients
      console.log(this._ingredients)
      this.createIngredienta()
      
    }

   

    createReipesCard () {
      const wrapperRecipe = document.createElement('article')
      wrapperRecipe.setAttribute('id', this._id)
      wrapperRecipe.setAttribute('class', 'col')
      
      const recipCard = `
        <div class="card">
            <img src="./assets/exemple.jpeg" class="card-img-top" alt="...">
            <div class="row card-body">
                <div class="col ingerdient__card">
                    <h5 class="card-title">${this._name}</h5>
                    <p class="card-text">
                   
                    </p>
                </div>
                <div class="col">
                    <h5 class="card-title">${this._time} min</h5>
                    <p class="card-text">${this._description}</p>
                </div>
            </div>
        </div> 
        `
        wrapperRecipe.innerHTML = recipCard
        return wrapperRecipe

    }

    createIngredienta(){
        
        console.log(wrapperRecipe)

        this._ingredients.forEach(ingredient => {
            console.log(ingredient)
            cre
           //const TemplateIngredient = new Ingredients(ingredient)
           //const card =  document.getElementById(this.id)
            //console.log(card)
          //card.appendChild(TemplateIngredient.createIngredient())
        })

    }

    

}

class Ingredients {
    constructor (ingredient) {
        this._ingredient = ingredient.ingredient
        this._quantity = ingredient.quantity
        this._unit = ingredient.unit
        this.card =  document.getElementById(this.id)
        console.log(this.card)
    }

    createIngredient () {
        const wrapperIngredient = document.createElement('p')
        wrapperIngredient.setAttribute('class', 'ingredient')
        console.log(this._ingredient)
        const ingredientCard = `
            <p>${this._ingredient} ${this._quantity} ${this._unit}</p>

        `
      wrapperIngredient.innerHTML = ingredientCard
      return wrapperIngredient
      
    }


}