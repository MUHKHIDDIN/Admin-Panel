import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./Layout/main-layout/main-layout";
import { Home } from "./pages/home/home";
import { Login } from "./pages/Login";
import { CategoryList } from "./pages/Category-list";
import { CategoryProduct } from "./pages/Category-product";
import { CreateProduct } from "./pages/Create-Product";
import { AllProduct } from "./pages/All-Products";
import { CreateCategory } from "./pages/Create-Category";
import { Profile } from "./pages/Profile";
import { CategoryEdit } from "./pages/category-edit";
import { ProductEdit } from "./pages/Product-edit";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="category" element={<CategoryList />} />
        <Route path="categories" element={<CategoryList />} />
        <Route path="category-product/:id" element={<CategoryProduct />} />
        <Route path="create-product" element={<CreateProduct />} />
        <Route path="all-product" element={<AllProduct />} />
        <Route path="create-category" element={<CreateCategory />} />
        <Route path="profile" element={<Profile />} />
        <Route path="category-edit/:id" element={<CategoryEdit />} />
        <Route path="product-edit/:id" element={<ProductEdit />} />
      </Route>
    </Routes>
  );
}

export default App;
