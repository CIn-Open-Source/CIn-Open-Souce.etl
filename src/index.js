import testJob from "./jobs/test-job.js";
import {
  mainSiteJob,
  roadmapJob,
  CSJob,
  etlJob,
  dashJob,
} from "./jobs/gather-mainsite-info.js";

testJob.start();
mainSiteJob.start();
roadmapJob.start();
CSJob.start();
etlJob.start();
dashJob.start();
