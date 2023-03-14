import { Status } from "./status_interface";

export interface ProductFeedback {
  id: string;
  title: string;
  category: string;
  upvotes: number;
  status: Status;
}
