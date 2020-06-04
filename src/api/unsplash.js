import axios from "axios";

//instance of client
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID viHSjvRXtEQw_FT0ePMERIEjlWuljvsOlXOMu1khAuQ",
  },
});
