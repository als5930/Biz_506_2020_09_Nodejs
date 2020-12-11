import shedule from "node-schedule";
import request from "request";
import gjDataVO from "../models/GjSttree.js";
import { DATA_GO_SEVICE_KEY, GJ_STTREE_URL } from "../modules/Data.go.kr.js";

const execSttree = () => {
  const goDataServiceKey = encodeURIComponent(DATA_GO_SEVICE_KEY);
  const queryString =
    GJ_STTREE_URL +
    "?" +
    encodeURIComponent("ServiceKey") +
    "=" +
    goDataServiceKey;

  const reqOption = {
    url: queryString,
    method: "GET",
  };
  console.time("Sttree");

  request(reqOption, async (err, response, body) => {
    const data = JSON.parse(body);
    const resCode = data.RESULT.RESULT_CODE;
    const resMessage = data.RESULT.RESULT_MSG;
    console.log(resCode, resMessage);

    const sttree_list = data.STTREE_LIST;
    console.log("가로수정보 데이터 추가 개수 : ", sttree_list.length);

    await gjDataVO.deleteMany();

    await gjDataVO
      .insertMany(sttree_list)
      .then((result) => console.log("DB Insert OK"))
      .catch((error) => console.log("DB Insert Error :", error));
  });
  console.timeEnd("Sttree");
};

export const sttree_Schedule = () => {
  shedule.scheduleJob("5 1 12 * * 0 ", execSttree);
};

export const justExec = () => execSttree();
