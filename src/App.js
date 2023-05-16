import SearchBar from "./components/SearchBar";
import axios from 'axios';
import RecipeList from "./components/RecipeList";
import {useState} from 'react';

function App(){
    const [searchResult, setSearchResult] = useState([]);

   
    const handleSubmit = async (searchValue) =>{
        try{
            const response = await axios.get(`http://localhost:3001/recipes?Name_like=${encodeURIComponent(searchValue)}`);
            setSearchResult(response.data);
        } catch (error){
            console.error(error);
        }
    };

    return (
        <div className="container">
        <SearchBar onSubmit={handleSubmit}/>
        <RecipeList recipes={searchResult}/>
        </div>
    )
}

export default App;