import { exec } from "child_process";
import express from "express";
const router = express.Router();
import request from "request";

import gjDataVO from "../models/GjSttree.js";

router.get("/", (req, res) => {
  console.log("stt root req");

  gjDataVO
    .find({})
    .sort({ STTR_NAME: 1 })
    .exec((err, data) => {
      res.render("stt_view", { sttree_llist: data });
    });
});
router.get("/sttree", (req, res) => {
  gjDataVO.find({ STTR_NAME: RegExp(sttree, "ig") }).sort({ STTR_NAME: 1 });
  exec((err, data) => {
    res.render("stt_view", { sttree_llist: data });
  });
});
router.get("/sttr/:sttr_id", async (req, res) => {
  const sttr_id = req.params.sttr_id;
  let queryString = GJ_STTREE_URL;
  queryString += `?serviceKey=${DATA_GO_SEVICE_KEY}`;
  queryString += `&STTR_ID=${sttr_id}`;
  const reqOPtion = {
    url: queryString,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  };

  await request(reqOPtion, (err, response, body) => {
    if (err) console.log(err);
    res.json(JSON.parse(body));
  });

  // { busstop_id: busstop_id}
  // res.json({ busstop_id });
});

export default router;
