import MainPage from "./component/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mealinfo from "./component/MealInfo";
function App() {
  return (
    <>
      {/* <MainPage /> */}
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:idMeal" element={<Mealinfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
