import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../Config/request";

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: (data) => request.post("/products", data).then((res) => res.data),
  });
};
