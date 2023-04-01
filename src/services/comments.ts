import axios from "axios";

export class Comments {
  constructor() {}
  getCommentByID = async (id: string) => {
    const { data } = await axios.get(`/api/comments/${id}`);
    return data;
  };
}
