import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../api";

export type ResponseItem = {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: {
    rate?: number;
    count?: number;
  };
};

type Response = ResponseItem[];

export const useGetProducts = () => {
  return useQuery<Response>({
    queryKey: ["products"],
    queryFn: ApiClient.getProducts,
  });
};
