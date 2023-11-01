import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "ff51942c03fa31d85f4b996715a6d4d1",
    language: "ko-KR",
  },
});

export default instance;
