import cron from "cron";
import axios from "axios";
import pg from "pg";
import * as cron_timers from "../constants/cron-constants.js";
import * as repos from "../constants/repos.js";
import * as querys from "../constants/querys.js";

var CronJob = cron.CronJob;
var Client = pg.Client;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

export const mainSiteJob = new CronJob(
  cron_timers.EVERY_MONTH_12pm,
  function () {
    axios
      .get(`https://api.github.com/repos/CIn-Open-Source/${repos.MAIN_SITE}`, {
        headers: {
          Authorization: process.env.GITHUB_PRIVATE_KEY,
        },
      })
      .then((response) => {
        const repoInfo = response.data;
        const text = querys.INSERT_PROJECTS;
        const values = [
          repoInfo.html_url,
          repoInfo.name,
          repoInfo.forks_count,
          repoInfo.stargazers_count,
          repoInfo.open_issues_count,
          repoInfo.description,
          repoInfo.language,
        ];

        client
          .query(text, values)
          .then((res) => {
            console.log(res.row[0]);
          })
          .catch((err) => {
            console.log(err.stack);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  "America/Sao_Paulo"
);

export const roadmapJob = new CronJob(
  cron_timers.EVERY_MONTH_12pm,
  function () {
    axios
      .get(`https://api.github.com/repos/CIn-Open-Source/${repos.ROADMAP}`, {
        headers: {
          Authorization: process.env.GITHUB_PRIVATE_KEY,
        },
      })
      .then((response) => {
        const repoInfo = response.data;
        const text = querys.INSERT_PROJECTS;
        const values = [
          repoInfo.html_url,
          repoInfo.name,
          repoInfo.forks_count,
          repoInfo.stargazers_count,
          repoInfo.open_issues_count,
          repoInfo.description,
          repoInfo.language,
        ];

        client
          .query(text, values)
          .then((res) => {
            console.log(res.row[0]);
          })
          .catch((err) => {
            console.log(err.stack);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  "America/Sao_Paulo"
);

export const CSJob = new CronJob(
  cron_timers.EVERY_MONTH_12pm,
  function () {
    axios
      .get(`https://api.github.com/repos/CIn-Open-Source/${repos.CS_GRAD}`, {
        headers: {
          Authorization: process.env.GITHUB_PRIVATE_KEY,
        },
      })
      .then((response) => {
        const repoInfo = response.data;
        const text = querys.INSERT_PROJECTS;
        const values = [
          repoInfo.html_url,
          repoInfo.name,
          repoInfo.forks_count,
          repoInfo.stargazers_count,
          repoInfo.open_issues_count,
          repoInfo.description,
          repoInfo.language,
        ];

        client
          .query(text, values)
          .then((res) => {
            console.log(res.row[0]);
          })
          .catch((err) => {
            console.log(err.stack);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  "America/Sao_Paulo"
);

export const etlJob = new CronJob(
  cron_timers.EVERY_MONTH_12pm,
  function () {
    axios
      .get(`https://api.github.com/repos/CIn-Open-Source/${repos.ETL}`, {
        headers: {
          Authorization: process.env.GITHUB_PRIVATE_KEY,
        },
      })
      .then((response) => {
        const repoInfo = response.data;
        const text = querys.INSERT_PROJECTS;
        const values = [
          repoInfo.html_url,
          repoInfo.name,
          repoInfo.forks_count,
          repoInfo.stargazers_count,
          repoInfo.open_issues_count,
          repoInfo.description,
          repoInfo.language,
        ];

        client
          .query(text, values)
          .then((res) => {
            console.log(res.row[0]);
          })
          .catch((err) => {
            console.log(err.stack);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  "America/Sao_Paulo"
);

export const dashJob = new CronJob(
  cron_timers.EVERY_MONTH_12pm,
  function () {
    axios
      .get(`https://api.github.com/repos/CIn-Open-Source/${repos.DASHBOARD}`, {
        headers: {
          Authorization: process.env.GITHUB_PRIVATE_KEY,
        },
      })
      .then((response) => {
        const repoInfo = response.data;
        const text = querys.INSERT_PROJECTS;
        const values = [
          repoInfo.html_url,
          repoInfo.name,
          repoInfo.forks_count,
          repoInfo.stargazers_count,
          repoInfo.open_issues_count,
          repoInfo.description,
          repoInfo.language,
        ];

        client
          .query(text, values)
          .then((res) => {
            console.log(res.row[0]);
          })
          .catch((err) => {
            console.log(err.stack);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  "America/Sao_Paulo"
);
