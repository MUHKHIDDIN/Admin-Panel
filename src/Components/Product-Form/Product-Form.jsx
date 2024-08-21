import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoSend } from "react-icons/io5";


const productSchema = z.object({
  categoryId: z.string().min(1, "Please select a category"),
  img: z.string().url("Please enter a valid image URL"),
  name: z.string().min(1, "Product name is required"),
  price: z.number().min(0.01, "Price must be greater than 0").or(z.string().regex(/^\d+(\.\d{1,2})?$/, "Price must be a valid number")),
});

export const ProductForm = ({ submit, categoryData = [] }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(productSchema),
  });

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      }}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="mx-auto w-[920px] space-y-4 bg-[#050505a2] p-9 shadow-lg rounded-[20px]"
      >
        <h1 className="mb-6 text-center text-2xl font-bold text-white">
          Create New Product
        </h1>
        <div className="mb-3">
          <label
            htmlFor="category"
            className="mb-1 block font-semibold text-white"
          >
            Category
          </label>
          <select
            id="category"
            className="w-full rounded-md border border-gray-300 bg-gray-100 p-2 shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500"
            {...register("categoryId")}
          >
            {categoryData.length > 0 ? (
              categoryData.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))
            ) : (
              <option value="" disabled>
                No categories available
              </option>
            )}
          </select>
          {errors.categoryId && (
            <p className="mt-1 text-sm text-red-500">{errors.categoryId.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label
            htmlFor="img"
            className="mb-1 block font-semibold text-white"
          >
            Image URL
          </label>
          <input
            id="img"
            placeholder="Enter image URL"
            className="w-full rounded-md border border-gray-300 bg-gray-100 p-2 shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="text"
            {...register("img")}
          />
          {errors.img && (
            <p className="mt-1 text-sm text-red-500">{errors.img.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label
            htmlFor="name"
            className="mb-1 block font-semibold text-white"
          >
            Product Name
          </label>
          <input
            id="name"
            placeholder="Enter product name"
            className="w-full rounded-md border border-gray-300 bg-gray-100 p-2 shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="text"
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label
            htmlFor="price"
            className="mb-1 block font-semibold text-white"
          >
            Price
          </label>
          <input
            id="price"
            placeholder="Enter price"
            className="w-full rounded-md border border-gray-300 bg-gray-100 p-2 shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="number"
            {...register("price", { valueAsNumber: true })}
          />
          {errors.price && (
            <p className="mt-1 text-sm text-red-500">{errors.price.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-cyan-600 p-3 font-semibold text-white shadow-md transition duration-150 ease-in-out hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          Send <IoSend />
        </button>
      </form>
    </div>
  );
};
