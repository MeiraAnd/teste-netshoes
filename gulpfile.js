const gulp       = require('gulp'),
      gutil      = require('gulp-util'),
      del        = require('del'),
      sourcemaps = require('gulp-sourcemaps'),
      sass       = require('gulp-sass'),
      cssnano    = require('gulp-cssnano'),
      source     = require('vinyl-source-stream'),
      browserify = require('browserify'),
      envify     = require('envify'),
      babelify   = require('babelify'),
      uglify     = require('gulp-uglify'),
      glob       = require('glob'),
      es         = require('event-stream'),
      path       = require('path');

const targetPath = 'public/assets/',
      sourcePath = 'resources/assets/',
      vendorPath = 'node_modules/';

gulp.task('sass', () => {
    return gulp.src(sourcePath + 'sass/*.scss')
        .pipe(sourcemaps.init())
            .pipe(sass({ includePaths: [vendorPath] })
                  .on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(targetPath + 'css'));
});

gulp.task('sass:watch', () => {
    gulp.watch(sourcePath + 'sass/**/*.scss', ['sass']);
});

gulp.task('styles', ['set-prod-env', 'sass'], () => {
    return gulp.src(targetPath + 'css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest(targetPath + 'css'));
});

gulp.task('images', done => {
    const files = '*.{ico,gif,jpg,jpeg,png,svg}',
        customPaths = [
            {
                name: '',
                path: sourcePath + 'images/**/' + files
            },
            {
                name: '',
                path: vendorPath + 'slick-carousel/slick/' + files
            }
        ];

    const tasks = customPaths.map(customPath => {
        return gulp.src(customPath.path)
            .pipe(gulp.dest(targetPath + 'images' + '/' + customPath.name));
    });

    es.merge(tasks).on('end', done);
});

gulp.task('fonts', done => {
    const files = '*.{woff,woff2}',
        customPaths = [
            {
                name: '',
                path: sourcePath + 'fonts/**/' + files
            },
            {
                name: 'bootstrap',
                path: vendorPath + 'bootstrap-sass/assets/fonts/bootstrap/' + files
            },
            {
                name: '',
                path: vendorPath + 'font-awesome/fonts/' + files
            },
            {
                name: '',
                path: vendorPath + 'slick-carousel/slick/fonts/' + files
            }
        ];

    const tasks = customPaths.map(customPath => {
        return gulp.src(customPath.path)
            .pipe(gulp.dest(targetPath + 'fonts' + '/' + customPath.name));
    });

    es.merge(tasks).on('end', done);
});

gulp.task('js', done => {
    glob(sourcePath + 'js/*.js', (error, files) => {
        if (error) {
            done(error);
        }

        const tasks = files.map(file => {
            const b = browserify({
                entries: [file],
                debug: true,
                transform: [[envify, { global: true }], babelify]
            });

            return b.bundle()
                .on('error', function (error) {
                    const message = new gutil.PluginError('browserify', error.message).toString();
                    process.stderr.write(message + '\n');
                    this.emit('end');
                })
                .pipe(source(path.basename(file)))
                .pipe(gulp.dest(targetPath + 'js'));
        });

        es.merge(tasks).on('end', done);
    });
});

gulp.task('js:watch', () => {
    gulp.watch(sourcePath + 'js/**/*.js', ['js']);
});

gulp.task('scripts', ['set-prod-env', 'js'], () => {
    return gulp.src(targetPath + 'js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(targetPath + 'js'));
});

gulp.task('copy-vendors', done => {
    const files = '*.{css,js,png}',
        customPaths = [
            {
                name: 'ckeditor',
                path: vendorPath + 'ckeditor/' + files
            },
            {
                name: 'ckeditor/adapters',
                path: vendorPath + 'ckeditor/adapters/**/' + files
            },
            {
                name: 'ckeditor/lang',
                path: vendorPath + 'ckeditor/lang/**/' + files
            },
            {
                name: 'ckeditor/plugins',
                path: vendorPath + 'ckeditor/plugins/**/' + files
            },
            {
                name: 'ckeditor/skins',
                path: vendorPath + 'ckeditor/skins/**/' + files
            },
            {
                name: 'wow',
                path: sourcePath + 'js/wow/' + files
            }
        ];

    const tasks = customPaths.map(customPath => {
        return gulp.src(customPath.path)
            .pipe(gulp.dest(targetPath + 'vendor' + '/' + customPath.name));
    });

    es.merge(tasks).on('end', done);
});

gulp.task('clean', () => {
    return del([targetPath]);
});

gulp.task('set-prod-env', () => {
    return (process.env.NODE_ENV = 'production');
});

gulp.task('watch', ['sass:watch', 'js:watch']);

gulp.task('default', ['styles', 'images', 'fonts', 'scripts', 'copy-vendors']);
