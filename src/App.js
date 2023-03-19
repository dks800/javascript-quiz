import "./App.css";
import logo from "./img/js-logo.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User";
import QuizPage from "./components/QuizPage";
import Score from "./components/Score";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
