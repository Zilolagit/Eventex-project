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
import webpHtml from "gulp-webp-html";
import pug from "gulp-pug";
import pugGlob from "pug-include-glob";

// Pug task
export default () => {
    return gulp.src(url.pug.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "PUG",
            message: error.message
        }))
    }))
    .pipe(pug({
        pretty: option.isD,
        plugins: [pugGlob()]
    }))
    .pipe(webpHtml())
    .pipe(gulp.dest(url.pug.dest))
    .pipe(browserSync.stream())
}