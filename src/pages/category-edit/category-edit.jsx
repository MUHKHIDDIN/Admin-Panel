import React from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { useEditCategory } from "../../pages/category-edit/Service/mutation/use-edit-category";

export const CategoryEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const { mutate, isSuccess } = useEditCategory();

  const submit = (data) => {
    mutate({ id, data });
    reset();
  };

  if (isSuccess) {
    navigate("/categories");
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(submit)}
        className="w-[800px] ml-[300px] mt-7 space-y-6 rounded-[30px] bg-[#383434] text-white p-[50px] shadow-lg"
       
      >
        <h1 className="mb-6 text-center text-2xl font-bold text-white">
          Edit Category
        </h1>
        <div className="mb-4">
          <label htmlFor="img" className="mb-2 block font-semibold text-white">
            Image URL
          </label>
          <input
            id="img"
            placeholder="Enter image URL"
            className="w-full rounded-lg border border-gray-300 bg-gray-100 p-3 shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="text"
            {...register("img", { required: true })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block font-semibold text-white">
            Category Name
          </label>
          <input
            id="name"
            placeholder="Enter category name"
            className="w-full rounded-lg border border-gray-300 bg-gray-100 p-3 shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="text"
            {...register("name", { required: true })}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-cyan-600 p-4 font-semibold text-white shadow-md transition duration-150 ease-in-out hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};
