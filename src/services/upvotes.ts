import axios from "axios";

export class UpVotes {
  constructor() {}

  updateUpVotes = async (userId: string, productId: string) => {
    const { data } = await axios.post(
      `/api/upvotes?userId=${userId}&productId=${productId}`
    );
    return data;
  };
}
