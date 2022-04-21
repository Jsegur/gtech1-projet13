import React from "react";
import { useState, useEffect } from "react";
import "./Search.css"

function Search() {
    const [datas, setDatas] = useState([]);
    const [searchTerm, setsearchTerm] = useState("");

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setDatas(json));
    }, []);

   const handleSearchTerm = (e) => {
       let value = e.target.value;
       value.length > 2 && setsearchTerm(value);
   };

   console.log(searchTerm);

    return (
        <>
            <div className="searchBar">
                <input
                    type="text"
                    name="searchBar"
                    id="searcBar"
                    placeholder="Rechercher"
                    onChange={handleSearchTerm}
                />
            </div>
            <div className="search_results">
                {datas
                    .filter((val) => {
                        return val.title.toLowerCase().includes(searchTerm.toLowerCase());
                    })
                    .maps((val) => {
                        return (
                            <div className="search_results" key={val.id}>
                                {val.title}
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}
export default Search;