import { useQuery } from "@tanstack/react-query";
import { ResponseItem } from "./useGetProducts";
import { ApiClient } from "../api";

export const useGetProductById = (id: number) => {
  return useQuery<ResponseItem>({
    queryKey: ["product", id],
    queryFn: () => ApiClient.getProductById(id),
  });
};
