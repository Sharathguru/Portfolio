import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Component/Layout";
import About from "./Component/About";
import Project from "./Component/Project";
import Contact from "./Component/Contact";
import Skill from "./Component/Skill";
import Education from "./Component/Education"; // Import Education component

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout for shared elements like Navbar
    children: [
      {
        path: "/",
        element: <About /> // Set About as the default route
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/skill",
        element: <Skill />
      },
      {
        path: "/project",
        element: <Project />
      },
      {
        path: "/education",
        element: <Education /> // Add Education route
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
