import "./App.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizGame from "./components/quiz-game";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/quiz-game" element={<QuizGame />} />
      </Routes>
    </Router>
  );
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/quiz-game",
  //     element: <QuizGame />,
  //   },
  // ]);
  // return (
  //   <>
  //     <RouterProvider router={router} />
  //   </>
  // );
}

export default App;
