import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomeScreen from "./screens/HomeScreen";
//import ProductScreen from "./screens/ProductScreen";
import ProductDescScreen from "./screens/ProductDescScreen";
import ProductCategoriesScreen from "./screens/ProductCategoriesScreen";
import ProductListScreen from "./screens/ProductListScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product_categories" element={<ProductCategoriesScreen />} />
      <Route
        path="/product_categories/:category"
        element={<ProductListScreen />}
      />

      {/* <Route path="/products/categories/:name" element={<ProductScreen />} /> */}
      <Route
        path="/product_categories/:category/:id"
        element={<ProductDescScreen />}
      />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
