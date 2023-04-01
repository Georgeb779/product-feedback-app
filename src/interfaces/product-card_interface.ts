export interface ProductCardInterface {
  id: string;
  title: string;
  description: string;
  category: string;
  upVotes: number;
  comments: any[];
  urlIsActive?: boolean;
}
