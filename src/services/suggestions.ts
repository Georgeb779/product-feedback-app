import axios from "axios";

export class Suggestions {
  constructor() {}

  getSuggestions = async () => {
    const { data } = await axios.get("/api/suggestions");
    return data;
  };
  
}
