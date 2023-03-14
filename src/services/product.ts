import axios from "axios";

export class Product {
  constructor() {}

  getProducts = async () => {
    const { data } = await axios.get("/api/products");
    return data;
  };
}
