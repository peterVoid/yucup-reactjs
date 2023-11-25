import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "77863653a9msh9a3cb6dacff07b1p16d312jsne016f0c1a267",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchingApi = async (url) => {
  return await axios
    .get(`${BASE_URL}/${url}`, options)
    .then((response) => response.data);
};
