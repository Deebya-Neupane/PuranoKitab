import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import FormPage from "./components/FormPage";
import Author from "./components/Author";

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/fetch-data",
    element: <FetchData />,
  },
  {
    path: "/author",
    element: <Author />,
  },
  {
    path: "/create-new",
    element: <FormPage />,
  }
];

export default AppRoutes;
