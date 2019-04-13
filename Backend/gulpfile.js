const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const chalk = require('chalk')
const config = require('./config.json')
gulp.task('default', () => {
    nodemon({
        script : 'app.js',
        ext : '.js',
        env : {
            PORT : 4800
        },
        ignore : ['./node_modules/**']
    }).on('restart', () =>{
        console.log(`restarting ${chalk.green(config.appName)}`)
    }).on('start',()=>{
        console.log(`starting app ${chalk.green(config.appName)}`)
    })
})