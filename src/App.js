import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe";

function App() {

    const APP_ID="63f9c44a"
    const APP_KEY= "1d0fd0bbf837ba5a4f0e24e949dc01d7"

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('chicken')

    useEffect(()=>{
        getRecipes().then(r => []
        )
    }, [query])

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json()
        setRecipes(data.hits)
        console.log(data.hits)
    }
    const updateSearch = e => {
        setSearch(e.target.value)
        console.log(search)
    }
    const getSearch = e => {
        e.preventDefault()
        setQuery(search)
    }
  return (
    <div className="App">
        <form onSubmit={getSearch} className="search-form">
            <input className="search-bar" type="text" value = {search} onChange={updateSearch}/>
            <button className="search-button" type="submit">Search</button>
        </form>
        <div>
            {recipes.map(recipe => (<Recipe title={recipe.recipe.label} calories={recipe.recipe.calories}
            image={recipe.recipe.image}/>))}
        </div>
    </div>
  );
}

export default App;
