import React, {useEffect} from 'react';
import './App.css';

function App() {
    const APP_ID="63f9c44a"
    const APP_KEY= "fb39bd52d9bee78117fdf01125967344"
    const exampleReq= 'https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}'

    useEffect(()=>{

    })
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
