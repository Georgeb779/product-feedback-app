import axios from "axios";

export class Comments {
  constructor() {}
  getCommentByID = async (id: string) => {
    const { data } = await axios.get(`/api/comments/${id}`);
    return data;
  };

  createComment = async (
    content: string,
    userId: string,
    productId: string
  ) => {
    const { data } = await axios.post("/api/comments", {
      content: content,
      user_id: userId,
      product_request_id: productId
    });
    return data;
  };
}
