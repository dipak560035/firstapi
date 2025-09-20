import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home";

import RootLayout from "./components/RootLayout";
import UserAdd from "./users/UserAdd";
import UserEdit from "./users/UserEdit";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<RootLayout />,
      children: [
        { index: true, element:<Home />

        },
        {
          path:'add-user',
          element:<UserAdd />
        },
        {
          path:'edit-user/:id',
          element:<UserEdit />
        }
        
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
