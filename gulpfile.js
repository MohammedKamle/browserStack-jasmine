const gulp = require('gulp');
const devices = require("./devices.json");
const print = require('gulp-print').default;
const jasmine_parallel = require('gulp-jasmine-parallel');
const jasmine = require('gulp-jasmine');

function createTask(key) {
  let device = devices[key];
  console.log("Creating Task for Device : " + JSON.stringify(device));
  gulp.task(key, function () {
    let device = devices[key];
    process.env.OS_VERSION = device.os_version;
    process.env.BROWSERNAME = device.browserName;
    process.env.BROWSER_VERSON = device.browser_version;
    process.env.OS = device.os;
    process.env.BUILD_ID = key;
    console.log("Executing Task for Device : " + JSON.stringify(device));
  });
    return gulp.src(["tests/*.browser.*"])
      .pipe(print(filepath => `test: ${filepath}`))
      // .pipe(jasmine());
      .pipe(jasmine_parallel({
            concurrency_value: 2,
            jasmine_opts: {
                verbose: true,
                includeStackTrace: true,
                errorOnFail: false
            }
        }));
}

let defaultTasks = []
for (let d in devices) {
  createTask(d);
  defaultTasks.push(d);
}

exports.default = gulp.series(defaultTasks);

// let defaultTasks = data.Devices;
// console.log(defaultTasks.length);
// for (let i = 0; i < defaultTasks.length; i++) {
//
//     gulp.task(defaultTasks[i].deviceID, async function () {
//         let d = defaultTasks[i];
//         console.log(d.length);
//         process.env.OS_VERSION = d.OS_VERSION;
//         process.env.BROWSERNAME = d.BROWSERNAME;
//         process.env.BROWSER_VERSION = d.BROWSER_VERSION;
//         process.env.OS = d.OS;
//         process.env.NAME = "InterviewKickStart -Sample Test ";
//         process.env.BUILD = "InterviewKickStart -Sample Build";
//         await gulp.src([
//             'tests/*.spec.*'
//         ])
//             .pipe(jasmine_parallel({
//                 concurrency_value: 2,
//                 jasmine_opts: {
//                     verbose: true,
//                     includeStackTrace: false,
//                     errorOnFail: false
//                 }
//             }))
//
//     });
// }


// gulp.task('set-dev-node-env', async function () {
//     process.env.NODE_ENV = 'development';
//     console.log(process.env.NODE_ENV);
// });
