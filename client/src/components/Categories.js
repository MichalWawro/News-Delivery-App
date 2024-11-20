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
        <button className={`categoryButton ${category === "News" ? "active" : ""}`} onClick={() => handleClick("News")}>News</button>    
        <button className={`categoryButton ${category === "Business" ? "active" : ""}`} onClick={() => handleClick("Business")}>Business</button>    
        <button className={`categoryButton ${category === "Science" ? "active" : ""}`} onClick={() => handleClick("Science")}>Science</button>  
        <button className={`categoryButton ${category === "Sport" ? "active" : ""}`} onClick={() => handleClick("Sport")}>Sports</button>
        <button className={`categoryButton ${category === "Health" ? "active" : ""}`} onClick={() => handleClick("Health")}>Health</button>
        <button className={`categoryButton ${category === "Food" ? "active" : ""}`} onClick={() => handleClick("Food")}>Food</button>
        <button className={`categoryButton ${category === "Lifestyle" ? "active" : ""}`} onClick={() => handleClick("Lifestyle")}>Lifestyle</button>    
        <button className={`categoryButton ${category === "Entertainment" ? "active" : ""}`} onClick={() => handleClick("Entertainment")}>Entertainment</button>      
        </div>
    )
};

export default Categories;