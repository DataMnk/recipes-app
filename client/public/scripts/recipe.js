const renderRecipe = async () => {
  const requestedID = parseInt(window.location.href.split('/').pop())

  const response = await fetch('/recipes')
  const data = await response.json()

  const giftContent = document.getElementById('gift-content')

  let recipe

  if (data) {
    recipe = data.find(r => r.id === requestedID)
  }

  if (recipe) {
    document.getElementById('image').src = recipe.image
    document.getElementById('name').textContent = recipe.name
    document.getElementById('category').textContent = `Category: ${recipe.category}`
    document.getElementById('difficulty').textContent = `Difficulty: ${recipe.difficulty}`
    document.getElementById('time').textContent = `⏱ Time: ${recipe.time}`
    document.getElementById('ingredients').textContent = `Ingredients: ${recipe.ingredients}`
    document.getElementById('description').textContent = recipe.description
    document.getElementById('submittedBy').textContent = `Submitted by: ${recipe.submittedBy}`
    document.getElementById('submittedOn').textContent = `Submitted on: ${recipe.submittedOn}`
    document.title = recipe.name
  } else {
    const msg = document.createElement('h2')
    msg.textContent = 'Recipe not found 😞'
    giftContent.appendChild(msg)
  }
}

renderRecipe()