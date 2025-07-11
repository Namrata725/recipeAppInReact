import MainPage from "./component/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      {/* <MainPage /> */}
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
