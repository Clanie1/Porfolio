import Layout from "./components/layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AboutMe from "./pages/About-me";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "home", element: <Home /> },
  { path: "projects", element: <Projects /> },
  { path: "about-me", element: <AboutMe /> },
  { path: "contact", element: <Contact /> },
]);

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
