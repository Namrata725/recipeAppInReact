import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./css/mealInfo.css";

function Mealinfo() {
  const { idMeal } = useParams();
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );
        const data = await res.json();
        setInfo(data.meals[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    if (idMeal) getInfo();
  }, [idMeal]);

  if (loading) return <p className="meal-loading">Loading recipe...</p>;
  if (!info) return <p className="meal-error">Recipe not found.</p>;

  return (
    <div className="mealInfo">
      <img src={info.strMealThumb} alt={info.strMeal} />
      <div className="mealContent">
        <h1>{info.strMeal}</h1>
        <h3>Instructions</h3>
        <p>{info.strInstructions}</p>
      </div>
    </div>
  );
}

export default Mealinfo;
