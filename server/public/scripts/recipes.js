const renderRecipes = async () => {
  const response = await fetch('/recipes')
  const data = await response.json()

  const mainContent = document.getElementById('main-content')

  if (data) {
    data.map(recipe => {
      const card = document.createElement('div')
      card.className = 'card'

      const topContainer = document.createElement('div')
      topContainer.className = 'top-container'
      topContainer.style.backgroundImage = `url(${recipe.image})`

      const bottomContainer = document.createElement('div')
      bottomContainer.className = 'bottom-container'

      const name = document.createElement('h3')
      name.textContent = recipe.name

      const category = document.createElement('p')
      category.textContent = `Category: ${recipe.category}`

      const difficulty = document.createElement('p')
      difficulty.textContent = `Difficulty: ${recipe.difficulty}`

      const time = document.createElement('p')
      time.textContent = `⏱ ${recipe.time}`

      const link = document.createElement('a')
      link.textContent = 'Read More >'
      link.href = `/recipes/${recipe.id}`
      link.role = 'button'

      bottomContainer.appendChild(name)
      bottomContainer.appendChild(category)
      bottomContainer.appendChild(difficulty)
      bottomContainer.appendChild(time)
      bottomContainer.appendChild(link)

      card.appendChild(topContainer)
      card.appendChild(bottomContainer)

      mainContent.appendChild(card)
    })
  } else {
    const msg = document.createElement('h2')
    msg.textContent = 'No Recipes Available 😞'
    mainContent.appendChild(msg)
  }
}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
  window.location.href = '../404.html'
} else {
  renderRecipes()
}