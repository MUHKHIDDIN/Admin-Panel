import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../../../Config/request";

export const useEditCategory = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) =>
      request.put(`/category/${id}`, data).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries(["get-category-list"]);
    },
  });
};
