import { pool } from './database.js'
import './dotenv.js'
import recipeData from '../data/recipes.js'

const createRecipesTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS recipes;
    CREATE TABLE IF NOT EXISTS recipes (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      category VARCHAR(255) NOT NULL,
      difficulty VARCHAR(50) NOT NULL,
      time VARCHAR(50) NOT NULL,
      image VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      ingredients TEXT NOT NULL,
      submittedBy VARCHAR(255) NOT NULL,
      submittedOn TIMESTAMP NOT NULL
    )
  `
  try {
    await pool.query(createTableQuery)
    console.log('🎉 recipes table created successfully')
  } catch (err) {
    console.error('⚠️ error creating recipes table', err)
  }
}

const seedRecipesTable = async () => {
  await createRecipesTable()

  recipeData.forEach((recipe) => {
    const insertQuery = {
      text: 'INSERT INTO recipes (name, category, difficulty, time, image, description, ingredients, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)'
    }
    const values = [
      recipe.name,
      recipe.category,
      recipe.difficulty,
      recipe.time,
      recipe.image,
      recipe.description,
      recipe.ingredients,
      recipe.submittedBy,
      recipe.submittedOn
    ]
    pool.query(insertQuery, values, (err) => {
      if (err) {
        console.error('⚠️ error inserting recipe', err)
        return
      }
      console.log(`✅ ${recipe.name} added successfully`)
    })
  })
}

seedRecipesTable()