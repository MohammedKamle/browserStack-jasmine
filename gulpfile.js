const jasmine_parallel = require('gulp-jasmine-parallel');
const data = require('./config1.json');
var gulp = require('gulp');
var print = require('gulp-print').default;
var env = require('gulp-env');
// gulp.task('default', async function (done) {
//     console.log('Inside gulp ' + process.env.OS);
//     await gulp.src([
//         'tests/' + process.env.TEST_FILE
//     ])
//         .pipe(jasmine_parallel({
//             concurrency_value: 1,
//             jasmine_opts: {
//                 verbose: true,
//                 includeStackTrace: false,
//                 errorOnFail: false
//             }
//         }))
// });

// gulp.task('default', async function (done) {
//     console.log('Inside gulp ' + process.env.OS);
//     process.env.OS_VERSION = "10";
//     process.env.BROWSERNAME = "Chrome";
//     process.env.BROWSER_VERSION = "88";
//     process.env.OS = "Windows";
//     process.env.NAME = "InterviewKickStart -Sample Test ";
//     process.env.BUILD = "InterviewKickStart -Sample Build";
//     await gulp.src([
//         'tests/*.spec.*'
//     ])
//         .pipe(jasmine_parallel({
//             concurrency_value: 1,
//             jasmine_opts: {
//                 verbose: true,
//                 includeStackTrace: false,
//                 errorOnFail: false
//             }
//         }))
// });

// gulp.task('default', async function (done) {
//     console.log('Inside gulp ' + process.env.OS);
//     // data.Devices.forEach(async function (d) {
//     for (let i = 0; i < data.Devices.length; i++) {
//         let d = data.Devices[i];
//         process.env.OS_VERSION = d.OS_VERSION;
//         process.env.BROWSERNAME = d.BROWSERNAME;
//         process.env.BROWSER_VERSION = d.BROWSER_VERSION;
//         process.env.OS = d.OS;
//         process.env.NAME = "InterviewKickStart -Sample Test ";
//         process.env.BUILD = "InterviewKickStart -Sample Build";
//         console.log(d.deviceID);
//         console.log(d.BROWSERNAME)
//         console.log(d.BROWSER_VERSION)
//         console.log(d.OS)
//         console.log(d.OS_VERSION)
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

//     }

//     // })

// });

// var defaultTasks = data.Devices;
// defaultTasks.forEach(function (d) {
//     gulp.task("default", function () {
//         console.log(d.BROWSERNAME);
//         process.env.OS_VERSION = d.OS_VERSION;
//         process.env.BROWSERNAME = d.BROWSERNAME;
//         process.env.BROWSER_VERSION = d.BROWSER_VERSION;
//         process.env.OS = d.OS;
//         process.env.NAME = "InterviewKickStart -Sample Test ";
//         process.env.BUILD = "InterviewKickStart -Sample Build";
//         return gulp.src([
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

//     });
// });

let defaultTasks = data.Devices;
console.log(defaultTasks.length);
for (let i = 0; i < defaultTasks.length; i++) {

    gulp.task("default", async function () {
        let d = defaultTasks[i];
        console.log(d.length);
        process.env.OS_VERSION = d.OS_VERSION;
        process.env.BROWSERNAME = d.BROWSERNAME;
        process.env.BROWSER_VERSION = d.BROWSER_VERSION;
        process.env.OS = d.OS;
        process.env.NAME = "InterviewKickStart -Sample Test ";
        process.env.BUILD = "InterviewKickStart -Sample Build";
        await gulp.src([
            'tests/*.spec.*'
        ])
            .pipe(jasmine_parallel({
                concurrency_value: 2,
                jasmine_opts: {
                    verbose: true,
                    includeStackTrace: false,
                    errorOnFail: false
                }
            }))

    });
}



// gulp.task('set-dev-node-env', async function () {
//     process.env.NODE_ENV = 'development';
//     console.log(process.env.NODE_ENV);
// });