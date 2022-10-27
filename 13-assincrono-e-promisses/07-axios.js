import axios from "axios";

axios.get("https://api.github.com/users/matheusrenner22").then((res) => {
  console.log(res.data);
});