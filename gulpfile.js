const gulp = require("gulp")
const sass = require('gulp-ruby-sass')


gulp.task('default', function(){

})


gulp.task('sass', () =>
    sass('stylesheet/*.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('css/'))
)

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
})

gulp.task('watch', ['browser-sync', 'sass'], function() {
  gulp.watch('./stylesheet/*.sass', ['sass'])
})
