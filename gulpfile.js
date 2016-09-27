var gulp = require('gulp');
var connect = require('gulp-connect');
var shell = require('gulp-shell');
var os = require('os');

gulp.task('watch', function () {
    gulp.watch('app/**/*.js', ['recarrega']);
    gulp.watch('app/**/*.css', ['recarrega']);
    gulp.watch('app/**/*.html', ['recarrega']);
    gulp.watch('index.html', ['recarrega']);
});

gulp.task('recarrega', function () {
    gulp.src([
        'index.html'
    ])
            .pipe(connect.reload());
});


gulp.task('serve', function () {
    connect.server({
        root: './',
        port: 8000,
        livereload: true
    });
    var comand = 'start';
    if (os.platform() === 'linux') {
        comand = 'x-www-browser';
    }
    gulp.start('watch');
    gulp.src('index.html')
            .pipe(shell([comand + ' http://localhost:8000']));
});