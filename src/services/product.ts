import axios from "axios";

export class Product {
  constructor() {}

  getProducts = async () => {
    const { data } = await axios.get("/api/products");
    return  data;
  };

  getProductById = async (id: any) => {
    const { data } = await axios.get(`/api/products/${id}`);
    return data;
  };

  updateProduct = async (id: string) => {
    const { data } = await axios.put(`/api/products/${id}`);
    return data;
  };
}
