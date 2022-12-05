const axios = require("axios");
const { formatDate } = require("./util");

const today = formatDate(new Date());

const template_id = process.env.TEMPLATE_ID;
const template_args = JSON.stringify({
  TODAY: today,
});
const token = process.env.TOKEN;

axios.post(
  "https://kapi.kakao.com/v2/api/talk/memo/send",
  new URLSearchParams({
    template_id,
    template_args,
  }),
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);
