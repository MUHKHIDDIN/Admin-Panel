import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BiSend } from "react-icons/bi";


const categorySchema = z.object({
  img: z.string().url("Please enter a valid image URL"),
  name: z.string().min(1, "Category name is required"),
});

export const CreateForm = ({ submit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(categorySchema),
  });

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center mt-4 rounded-[20px]"
      style={{
        backgroundImage:
          'url("https://th.bing.com/th/id/OIP.twDw1sXK9O2QQzPZoHEg3gHaEK?rs=1&pid=ImgDetMain")',
      }}
    >
      <form
        onSubmit={handleSubmit((data) => {
          submit(data);
          reset();
        })}
        className="w-[800px] space-y-6 rounded-lg bg-[#060606ad] p-[50px] shadow-lg"
      >
        <h1 className="mb-6 text-center text-2xl font-bold text-white">
          Create New Category
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
            {...register("img")}
          />
          {errors.img && (
            <p className="mt-1 text-sm text-red-500">{errors.img.message}</p>
          )}
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
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="flex items-center gap-1 justify-center w-full rounded-lg bg-cyan-600 p-4 font-semibold text-white shadow-md transition duration-150 ease-in-out hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          Send <BiSend />
        </button>
      </form>
    </div>
  );
};
