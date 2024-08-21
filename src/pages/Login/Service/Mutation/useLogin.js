import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../Config/request";

export const useLogin = () => {
  return useMutation({
    mutationFn: (data) => request.post("/login", data).then((res) => res.data),
  });
};
