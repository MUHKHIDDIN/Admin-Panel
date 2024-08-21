import React from "react";
import { ProductForm } from "../../Components/Product-Form";
import { userCategoryList } from "../Category-list/Service/Query/user-category-list";
import { useCreateProduct } from "./Service/mutation/use-create-product";
import { useNavigate } from "react-router-dom";


export const CreateProduct = () => {
  const { data, isLoading } = userCategoryList();
  const { mutate } = useCreateProduct();
  const navigate = useNavigate();

  const submit = (Data) => {
    mutate(Data, {
      onSuccess: () => {
        navigate("/categories");
      },
    });
  };

  return (
    <div className="ml-auto mr-auto bg-gray-100 p-6">
      <div className="rounded-lg bg-white p-8 shadow-lg">
        {!isLoading ? (
          <ProductForm categoryData={data} submit={submit} />
        ) : (
          <div className="text-center text-gray-600">Loading...</div>
        )}
      </div>
    </div>
  );
};
