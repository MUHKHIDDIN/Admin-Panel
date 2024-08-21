import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../Config/request"

  export const useProductList = (id) => {
  return useQuery({
    queryKey: ["product-list",id],
    queryFn: () => request.get("/products",{params:{
      categoryId:id
    }}).then((res) => res.data),
  })
}


