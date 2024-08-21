import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLogin } from "./Service/Mutation/useLogin";
import { saveState } from "../../Config/storage";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VscSend } from "react-icons/vsc";
const schema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Email is invalid" }),
  password: z
    .string()
    .nonempty({ message: "Password is required" })
    .min(4, { message: "Password is too short" }),
});

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const { mutate } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        saveState("user", { ...res.user, token: res.accessToken });
        toast.success("Login successful!");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      },
      onError: (error) => {
        toast.error("Login failed. Please try again.");
        h;
      },
    });
  };

  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/196661/pexels-photo-196661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      }}
    >
      <div className="w-[500px] rounded-lg bg-[#5050534b] bg-opacity-80 p-[50px] shadow-md backdrop-blur-md">
        <form onSubmit={handleSubmit(submit)}>
          <div className="mb-4">
            <input
              className="w-full rounded-md border border-gray-300 p-3 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              {...register("email")}
              type="email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="relative mb-6">
            <input
              className="w-full rounded-md border border-gray-300 p-3 pr-10 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              {...register("password")}
              type={showPassword ? "text" : "password"}
            />
            <div
              className="absolute inset-y-0 right-3 flex cursor-pointer items-center"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <FaEyeSlash className="h-5 w-5 hover:text-red-500" />
              ) : (
                <FaEye className="h-5 w-5 hover:text-blue-500" />
              )}
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-3 text-white transition duration-300 ease-in-out hover:bg-blue-700 flex items-center justify-center gap-2 text-[20px]"
          >
            Send  <VscSend />
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};
