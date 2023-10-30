import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/Errorpage.jsx";
import ExerciseDetails from "./routes/ExerciseDetails.jsx";
import ExerciseChart from "./components/ExerciseChart.jsx";
import Dashboard from "./components/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{}],
  },
  {
    path: "/exercise/:name",
    element: <ExerciseDetails />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/exercise/chart",
    element: <ExerciseChart />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/exercise/dash",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
