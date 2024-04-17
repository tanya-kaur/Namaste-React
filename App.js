import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./src/components/Grocery";

const Grocery = lazy(()=> import("./src/components/Grocery"));
// JSX => Babel transpiles to React.creatElement => JS object => HTML
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([{
  path: "/",
  element: <AppLayout />,
  children: [
    {
      path: "/",
      element: <Body />
    },
    {
      path: "/About",
      element: <About />
    },
    {
      path: "/Contact",
      element: <Contact />
    },
    {
      path: "/Grocery",
      element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
    },
    {
      path: "/restaurants/:resId",
      element: <RestaurantMenu />
    }
  ],
  errorElement: <Error />
},

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
