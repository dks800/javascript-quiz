import "./App.css";
import logo from "./img/js-logo.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User/User";
import QuizPage from "./components/QuizPage";
import Score from "./components/Score";
import CheckSession from "./components/CheckSession/CheckSession";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <CheckSession name="user">
              <User />
            </CheckSession>
          }
        />
        <Route
          path="/quiz"
          element={
            <CheckSession name="quiz">
              <QuizPage />
            </CheckSession>
          }
        />
        <Route
          path="/score"
          element={
            <CheckSession name="score">
              <Score />
            </CheckSession>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
