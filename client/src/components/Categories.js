import React from "react";
import './Categories.css';

function Categories({category, setCategory}) {

    const handleClick = (value) => {
        if(value != category) {
            setCategory(value)
        } else {
            setCategory(null)
        }
    }

    return(
        <div className="categoriesBar">
        <button className={`categoryButton ${category === "News" ? "active" : ""}`} onClick={() => handleClick("News")} >News</button>    
        <button className={`categoryButton ${category === "Sport" ? "active" : ""}`} onClick={() => handleClick("Sport")}>Sports</button>    
        <button className={`categoryButton ${category === "Food" ? "active" : ""}`} onClick={() => handleClick("Food")}>Food</button>    
        <button className={`categoryButton ${category === "Health" ? "active" : ""}`} onClick={() => handleClick("Health")}>Health</button>    
        </div>
    )
};

export default Categories;