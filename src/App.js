import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizGame from "./components/quiz-game";
import Home from "./components/home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/quiz-game",
      element: <QuizGame />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
