import { NavLink } from "react-router-dom";
import "./css/Mealcard.css";
function Mealcard({ detail }) {
  console.log(detail);
  return (
    <>
      <div className="meals">
        {!detail
          ? ""
          : detail.map((curItem, index) => {
              return (
                <div key={index}>
                  <img src={curItem.strMealThumb} />
                  <p>{curItem.strmeal}</p>
                  <NavLink to={`/${curItem.idMeal}`}>
                    <button>Recipe</button>
                  </NavLink>
                </div>
              );
            })}
      </div>
    </>
  );
}

export default Mealcard;
