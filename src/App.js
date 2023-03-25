import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User/User";
import QuizPage from "./components/QuizPage";
import Score from "./components/Score";
import CheckSession from "./components/CheckSession/CheckSession";
import flag from "./img/indiaflag.png";
import linkedin from "./img/linkedin.png";

function App() {
  return (
    <>
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
      <p className="created-by">
        Made with ❤️ by Deepak{" "}
        <img src={flag} alt="Flag" height="20" width="20" loading="lazy" />
        <a
          href="https://www.linkedin.com/in/dks800"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="linked-in"
            src={linkedin}
            alt="LinkedIn"
            height="15"
            width="15"
            loading="lazy"
          />
        </a>
      </p>
    </>
  );
}

export default App;
