// Gulp include
import gulp from "gulp";

// Browser-sync include
import browserSync from "browser-sync";

// Url include
import url from "../settings/url.js";

// Option include
// import option from "../settings/option.js";

// Plugns
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import size from "gulp-size";
import webpCss from "gulp-webp-css";
import csso from "gulp-csso";
import rename from "gulp-rename";
import autoprefixer from "gulp-autoprefixer";
import gulpSass from "gulp-sass";
import sassGlob from "gulp-sass-glob";
import nodeImporter from "node-sass-tilde-importer";
import nodeSass from "sass";
const sass = gulpSass(nodeSass);

// Scss task
export default () => {
    return gulp.src(url.scss.src,{sourcemaps: true})
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "SCSS",
            message: error.message
        }))
    }))
    .pipe(sassGlob())
    .pipe(sass({
        importer: nodeImporter
    }))
    .pipe(autoprefixer())
    .pipe(webpCss())
    .pipe(gulp.dest(url.scss.dest,{sourcemaps: true}))
    .pipe(size({
        title: ".css"
    }))
    .pipe(csso())
    .pipe(size({
        title: ".css->.min"
    }))
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe(gulp.dest(url.scss.dest,{sourcemaps: true}))
    .pipe(browserSync.stream())
}