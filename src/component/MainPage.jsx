import { useState } from "react";
import "./css/MainPage.css";
import Mealcard from "./Mealcard";

function MainPage() {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");
  const searchInput = (event) => {
    setSearch(event.target.value);
  };

  const myFun = async () => {
    if (search == "") {
      setMsg("please enter something");
    } else {
      setMsg("");
      const get = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const jsonData = await get.json();
      if (jsonData.meals === null) {
        setData(null);
        setMsg("No data found");
      } else {
        setData(jsonData.meals);
        setMsg("");
      }
    }
  };
  //console.log(data);
  return (
    <>
      <h2 style={{ color: "#00796b", textAlign: "center" }}>
        Food Receipe App
      </h2>
      <div className="contaner">
        <div className="Sbar">
          <input type="text" placeholder="Enter Dish" onChange={searchInput} />
          <button onClick={myFun}>Search</button>
        </div>

        <h3>{msg}</h3>
        <div>
          <Mealcard detail={data} />
        </div>
      </div>
    </>
  );
}

export default MainPage;
