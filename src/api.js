import axios from "axios";

const url = "https://reqres.in/api/users/2";

async function getUser() {
  const { data } = await axios.get(url);

  return data;
}

export default {
  getUser,
}
