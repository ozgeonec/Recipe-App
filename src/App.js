import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe";

function App() {

    const APP_ID="63f9c44a"
    const APP_KEY= "1d0fd0bbf837ba5a4f0e24e949dc01d7"

    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        getRecipes().then(r => [])
    }, [])

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json()
        setRecipes(data)
        console.log(data)
    }

  return (
    <div className="App">
        <form className="search-form">
            <input className="search-bar" type="text"/>
            <button className="search-button" type="submit">Search</button>
        </form>

    </div>
  );
}

export default App;
