import cron from "cron";
import * as cron_timers from "../constants/cron-constants.js";

var CronJob = cron.CronJob;

console.log("Test job ready");
const testJob = new CronJob(
  cron_timers.EVERY_DAY_MIDNIGHT,
  function () {
    const d = new Date();
    console.log("Midnight:", d);
  },
  "America/Sao_Paulo"
);

export default testJob;
