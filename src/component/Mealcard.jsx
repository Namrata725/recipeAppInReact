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
                  <button>Recipe</button>
                </div>
              );
            })}
      </div>
    </>
  );
}

export default Mealcard;
