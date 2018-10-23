# kalfconsultancy.nl

Website about a minimalistic approach to Product management

Project styling will be done through SCSS, will use gulp as task runner. 
Currently gulp produces css files from scss files and moves js files to correct src/js folder. 
Also command `gulp` (from terminal) fires up browsersync to localhost:300

Remember: `Control + C` will end browsersync running in terminal.

## Setup process 

1. Created repo on Github.
2. Ran `npm init` in project root folder.
3. Ran `npm install bootstrap` in project root folder.
4. Created a dev environment: `/src` folder in root and 4 folders in `/src` folder: `assets`, `css`, `js` and `scss`.
5. Inside `/src` folder, created the index.html file.
6. Created a `style.scss` file in the `/src/scss` folder.
7. Wrote some basic first scss in the newly created file.
8. Installed Gulp, gup-sass and browser-sync through running: `npm install gulp browser-sync gulp-sass --save-dev`
9. Created a `gulpfile.js` file in the project's root folder.
10. Pasted the following content in the `gulpfile.js` file --> see code snippet down below.
11. Running the `gulp` command will launch a browser window to `http://localhost:3000` that will display the project.
12. Some issues had to be resolved:
- jQuery not uploaded diy: `npm install jquery --save` 
- Popper not installed: `npm install popper.js --save` 
- gulpfile.js node_modules/popper.js/dist/umd/popper.min.js not from node_modules/popper.js/dist/popper.min.js as this gives the unexpected token error in chrome.
- Gulp not working: 
`npm install -g minimatch (Enter)`

`npm install -g graceful-fs (Enter)`

`npm link gulp (Enter)`

### Contents of the gulpfile.js 

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

// Move the javascript files into our /src/js folder
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./src"  
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['js','serve']);
