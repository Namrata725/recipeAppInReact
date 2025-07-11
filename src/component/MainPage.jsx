import { useState } from "react";
import "./css/MainPage.css";
import Mealcard from "./Mealcard";
function MainPage() {
  const [data, setData] = useState();
  const [search, setSearch] = useState();

  const searchInput = (event) => {
    setSearch(event.target.value);
  };

  const myFun = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const jsonData = await get.json();
    setData(jsonData.meals);
  };
  //console.log(data);
  return (
    <>
      <div className="contaner">
        <div className="Sbar">
          <input type="text" placeholder="Enter Dish" onChange={searchInput} />
          <button onClick={myFun}>Search</button>
        </div>

        <div>
          <Mealcard detail={data} />
        </div>
      </div>
    </>
  );
}

export default MainPage;
