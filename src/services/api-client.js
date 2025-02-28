import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5c8468f1d3a04b989b06e237f0cb6986",
  },
});
