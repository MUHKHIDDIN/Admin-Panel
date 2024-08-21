import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../../../Config/request";

export const useEditProduct = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) =>
      request.put(`/products/${id}`, data).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries(["get-Product-list"]);
    },
  });
};
 