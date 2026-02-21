import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getCourseById } from "./data";

import Layout from "./Layout";
import Home from "./Home";
import Courses from "./Courses";
import About from "./About";
import NotFound from "./NotFound";
import CourseDetail from "./CourseDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "courses", element: <Courses /> },
      {
        path: "courses/:id",
        element: <CourseDetail />,
        errorElement: <div style={{ padding: '20px', color: 'red' }}><h2>Курс не найден!</h2><a href="/courses">Назад</a></div>,
        loader: async ({ params }) =>{
          const course = getCourseById(Number(params.id));
          if (!course) {
            throw new Error("Курс не найден");
          }
          return { course };
        },
      },
      { path: "about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);