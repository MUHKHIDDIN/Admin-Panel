import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../Config/request";

export const useCategoryProduct = () => {
  return useMutation({
    mutationFn: (id) => request.delete(`/products/${id}`).then((res) => res.data),
  });
};
