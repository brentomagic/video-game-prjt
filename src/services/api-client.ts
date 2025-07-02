import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4f304b831d7541dfbf41fd954a20bec3",
  },
});
