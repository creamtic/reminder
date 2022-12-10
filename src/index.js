const axios = require("axios");
const { formatDate } = require("./util");

const today = formatDate(new Date());

/*
  ${TODO_TITLE_5}
  ${TODO_IMG_5}
  ${TODO_SUB_TITLE_2}
  ${TODO_TITLE_1}
  ${TODO_SUB_TITLE_3}
  ${TODO_TITLE_3}
  ${TODO_SUB_TITLE_5}
  ${TODAY}
  ${TODO_IMG_1}
  ${TODO_IMG_4}
  ${TODO_TITLE_2}
  ${TODO_TITLE_4}
  ${TODO_IMG_3}
  ${TODO_SUB_TITLE_1}
  ${TODO_SUB_TITLE_4}
  ${TODO_IMG_2}
*/
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
