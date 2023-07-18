import Layout from "./components/layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  { path: "home", element: <Home /> },
  { path: "projects", element: <div>Projects</div> },
  { path: "about-me", element: <div>About me</div> },
  { path: "contact", element: <div>Contact</div> },
]);

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
