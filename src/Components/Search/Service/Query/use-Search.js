import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../Config/request";

export const useSearch = (value) => {
  return useQuery({
    queryKey: ["search", value],
    queryFn: () =>
      request
        .get("/category", {
          params: { name_like: value },
        })
        .then((res) => res.data),
    enabled: !!value, 
  });

};
