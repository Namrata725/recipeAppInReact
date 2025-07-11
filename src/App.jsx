import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Mealinfo from "./component/MealInfo";
import MainPage from "./component/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:idMeal" element={<Mealinfo />} />
      </Routes>
    </Router>
  );
}

export default App;
