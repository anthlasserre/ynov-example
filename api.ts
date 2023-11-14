const BASE_URL = "https://fakestoreapi.com";

export class ApiClient {
  static getProducts = async () => {
    return fetch(`${BASE_URL}/products`).then((res) => res.json());
  };
  static getProductById = async (id: number) => {
    return fetch(`${BASE_URL}/products/${id}`).then((res) => res.json());
  };
}
