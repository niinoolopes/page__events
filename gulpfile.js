/* Variaveis */
var gulp = require('gulp'); 
var browserSync = require('browser-sync').create();
var reload = browserSync.reload; 
var concat = require('gulp-concat');
var sass = require('gulp-sass');  
var autoprefixer = require('gulp-autoprefixer');
var image = require('gulp-image');

// -- /// --

/*-TASK - SERVE -*/
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./app",
        }
    }); 
    /* */
    console.log("SERVE - OK!");  
    /* */
});



/*-TASK - STYLES - GRID -*/
gulp.task('styles-grid', function(){
    gulp.src('app/styles/src/includes/sass-grid.scss')
    .pipe( sass() )
    .pipe(concat('grid.scss'))
    .pipe(gulp.dest('app/styles/src/includes'))
    /* */
    console.log("GRID OK!"); 
    /* */
});


/*-TASK - STYLES - MINI -*/
gulp.task('styles-mini',  function() {  
    gulp.src('app/styles/all-style.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe( sass({
        outputStyle: 'compressed'
    }) )  
    .pipe(gulp.dest('app/styles'))
    /* */
    console.log("STYLES - MINI OK!"); 
    /* */
});


/*-TASK - STYLES -*/
gulp.task('styles', function() {  
    gulp.src('app/styles/src/init.scss')
    .pipe( sass() )
    // .pipe(autoprefixer({
    //     browsers: ['last 2 versions'],
    //     cascade: false
    // }))
    .pipe(concat('all-style.css'))
    .pipe(gulp.dest('app/styles'))
    /* */
    console.log("STYLES OK!"); 
    /* */
});


/*-TASK - SCRIPTS -*/
gulp.task('scripts',  function() {
    gulp.src('app/scripts/src/**/*.js') 
    .pipe(concat('main.js'))
    .pipe(gulp.dest('app/scripts'))
    /* */
    console.log("SCRIPTS OK!"); 
    /* */
});


/*-TASK - IMAGES -*/
gulp.task('images',  function() {
    gulp.src('app/assets/images/src/**/*')
    .pipe(image({ optimizationLevel: 5, progressive: true, interlaced: true }) )
    .pipe(gulp.dest('app/assets/images/'))
    /* */
    console.log("IMAGES OK!"); 
    /* */
});


/*-TASK - WACTH -*/
gulp.task('wacth', function(){ 
    gulp.watch(['app/styles/src/includes/sass-grid.scss','app/styles/src/includes/sass-mixin.scss'],['styles-grid']).on('change', reload);
    gulp.watch('app/styles/src/**/*.scss',['styles']).on('change', reload);
    gulp.watch('app/scripts/src/**/*.js',['scripts']).on('change', reload);
    gulp.watch('app/assets/images/src/*',['images']).on('change', reload);
    gulp.watch('app/**/*.html').on('change', reload);
    /* */
    console.log("WACTH OK!"); 
    /* */
});


// task - Gulp 
gulp.task('start', function(){
    gulp.run('styles-grid');
    gulp.run('styles');
    gulp.run('scripts');
    gulp.run('images');
    gulp.run('wacth');
    gulp.run('serve')  
    /* */
    console.log("GULP START OK!"); 
    /* */
});


/*-TASK DEFAULT-*/
gulp.task('default', ['start']);
 


/*-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --*/
/*- TASK TESTES -*/
/*-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --*/



gulp.task('teste', function(){
    console.log('GULP GRID');
});


/*-TASK - WACTH TESTE -*/
gulp.task('wacth-teste', function(){ 
    gulp.watch('app/styles/src/includes/sass-grid.scss',['styles-grid']);
    gulp.watch('app/styles/src/**/*.scss',['styles']);
    gulp.watch('app/scripts/src/**/*.js',['scripts']);
    gulp.watch('app/assets/images/src/*',['images']);
    gulp.watch('app/**/*.html');
    /* */
    console.log("WACTH OK!"); 
    /* */
}); 