import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: { h1: "en", gl: "US" },
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_YOYTUBE_API_KEY,
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};

export const fatchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
