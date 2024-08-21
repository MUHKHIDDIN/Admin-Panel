import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../Config/request";

export const useCreateCategory = () => {
  return useMutation({
    mutationFn: (data) =>
      request.post("/category", data).then((res) => res.data),
  });
};
export const useEditCategory = () => {
  return useMutation({
    mutationFn: (id,data) =>
      request.put(`/category/${id}`, data).then((res) => res.data),
  });
};

export const useDeleteCategory = () => {
  return useMutation({
    mutationFn: (id) =>
      request.delete(`/category/${id}`).then((res) => res.data),
  });
};
