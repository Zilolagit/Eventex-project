// Gulp include
import gulp from "gulp";

// Browser-sync include
import browserSync from "browser-sync";

// Url include
import url from "../settings/url.js";

// Option include
import option from "../settings/option.js";

// Plugns
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import babel from "gulp-babel";
import webpack from "webpack-stream";

// Js task
export default () => {
    return gulp.src(url.js.src,{sourcemaps: true})
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "JS",
            message: error.message
        }))
    }))
    .pipe(babel())
    .pipe(webpack(option.webpack))
    .pipe(gulp.dest(url.js.dest,{sourcemaps: true}))
    .pipe(browserSync.stream())
}