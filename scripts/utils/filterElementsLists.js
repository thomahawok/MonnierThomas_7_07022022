/* eslint-disable no-unused-vars */
/*************/
function getIngredients(filtredRecipes, tagsItemIngredients) {
  const ingredients = [] /*Tableau de l'ensembre des ingrédient*/

  for (let i = 0; i < filtredRecipes.length; i++) {
    for (let j = 0; j < filtredRecipes[i].ingredients.length; j++) {
      let recipeIngIng = filtredRecipes[i].ingredients[j].ingredient
      ingredients.push(recipeIngIng.toLowerCase())
    }
  }
  return filterElementList(ingredients, tagsItemIngredients)
}

function getAppliances(filtredRecipes, tagsItemAppilances) {
  const appliances = [] /*Tableau de l'ensembre des ingrédient*/
  for (let i = 0; i < filtredRecipes.length; i++) {
    let recipeAppliance = filtredRecipes[i].appliance
    appliances.push(recipeAppliance.toLowerCase())
  }
  /*
  Object.keys(filtredRecipes).forEach((key) => {
    let recipeAppliance = filtredRecipes[key].appliance
    appliances.push(recipeAppliance.toLowerCase())
  })*/
  return filterElementList(appliances, tagsItemAppilances)
}

function getUstensils(filtredRecipes, tagsItemUstenceils) {
  let ustensils = [] /*Tableau de l'ensembre des ingrédient*/

  for (let i = 0; i < filtredRecipes.length; i++) {
    for (let j = 0; j < filtredRecipes[i].ustensils.length; j++) {
      let ustensilList = filtredRecipes[i].ustensils[j]
      ustensils.push(ustensilList.toLowerCase())
    }
  }

  /*
  filtredRecipes.forEach((recipe) =>
    recipe.ustensils.forEach((ustensil) =>
      ustensils.push(ustensil.toLowerCase())
    )
  )
  */
  return filterElementList(ustensils, tagsItemUstenceils)
}

function filterElementList(getedElements, anyArrayTags) {
  const filteredElement = getedElements.filter(onlyUniqueInliste)
  filteredElement.sort((a, b) => a.localeCompare(b))
  if (anyArrayTags) {
    return filterListeAndTags(filteredElement, anyArrayTags)
  } else {
    return filteredElement
  }
}

function onlyUniqueInliste(value, index, self) {
  return self.indexOf(value) === index
}

function filterListeAndTags(filteredElement, anyArrayTags) {
  let symetricDifference = []
  symetricDifference = [
    ...anyArrayTags.filter((v) => !filteredElement.includes(v)),
    ...filteredElement.filter((f) => !anyArrayTags.includes(f)),
  ]
  return symetricDifference
}
