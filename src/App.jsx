import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Mealinfo from "./Mealinfo";

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
