import Book  from "./components/Book";
import CreateBookPage   from "./components/CreateBookPage";
import EditBookPage from "./components/EditBookPage";
import Home from "./components/Home";
import Author from "./components/Author";
import CreateAuthorPage from "./components/CreateAuthorPage";
import EditAuthorPage from "./components/EditAuthorPage";

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/book",
    element: <Book />,
  },
  {
    path: "/create-book",
    element: <CreateBookPage />,
  },
  {
    path: "/edit-book/:id",
    element: <EditBookPage />,
  },
  {
    path: "/author",
    element: <Author />,
  },
  {
    path: "/create-author",
    element: <CreateAuthorPage />,
  },
  {
    path: "/edit-author/:id",
    element: <EditAuthorPage />,
  }
];

export default AppRoutes;
