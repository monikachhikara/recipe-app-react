import { useState } from "react";

function SearchBar({onSubmit}){
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (event)=>{
        setSearchValue(event.target.value)
    }

    const handleSubmit=(event) =>{
        event.preventDefault();
        setSearchValue('');
        onSubmit(searchValue);
    }
    
    return (
        <div className="container mt-5">
            <div className="card bg-secondary text-white">
                <form onSubmit={handleSubmit}>
                    <div className="card-body">
                        <div className="card-title">
                            <input type="text" className="form-control mt-4" value={searchValue} onChange={handleChange}/>
                        </div>
                        <div className="card-text">
                            <button type="submit" className="btn btn-primary m-2">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchBar;