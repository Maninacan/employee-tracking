import gulp from 'gulp';
import webpack from 'webpack';
import path from 'path';
import yargs from 'yargs';
import WebpackDevServer from 'webpack-dev-server';
import colorsSupported from 'supports-color';
import gutil from 'gulp-util';
import template from 'gulp-template';
import rename from 'gulp-rename';
import webpackConfig from './webpack.config.babel';

const root = 'src',
  angularModuleName = 'employeeTracking';

var paths = {
  js: path.join(root, 'app', 'components', '**/*!(.spec.js).js'), // exclude spec files
  scss: path.join(root, 'app', '**/*.scss'), // stylesheets
  html: [
    path.join(root, 'app', '**/*.html'),
    path.join(root, 'index.html')
  ],
  entry: path.join(__dirname, root, 'app', 'app.js'),
  output: root,
  blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**'),
  blankServiceTemplates: path.join(__dirname, 'generator', 'service/**/*.**')
};

gulp.task("webpack", (cb) => {
  // run webpack
  webpack({
    // configuration
  }, (err, stats) => {
    if (err) {
      throw new gutil.PluginError("webpack", err);
    }
    gutil.log("[webpack]", stats.toString({
      colors: colorsSupported,
      chunks: false,
      errorDetails: true
    }), `
      Finished on ${new Date()}
    `);

    cb();
  });
});

gulp.task("webpack-dev-server", () => {
  // Start a webpack-dev-server
  const compiler = webpack(webpackConfig);

  new WebpackDevServer(compiler, {
    // server and middleware options
  }).listen(8080, "localhost", function (err) {
    if (err) throw new gutil.PluginError("webpack-dev-server", err);
    // Server listening
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
  });
});

gulp.task('component', () => {
  const cap = (val) => val.charAt(0).toUpperCase() + val.slice(1);
  const name = yargs.argv.name;
  const parentPath = yargs.argv.parent || '';
  const destPath = path.join(root, 'app', 'components', parentPath, name);

  return gulp.src(paths.blankTemplates)
    .pipe(template({
      name: name,
      appName: angularModuleName,
      upCaseName: cap(name)
    }))
    .pipe(rename(path => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
});

gulp.task('service', () => {
  const cap = (val) => val.charAt(0).toUpperCase() + val.slice(1);
  const name = yargs.argv.name;
  const parentPath = yargs.argv.parent || '';
  const destPath = path.join(root, 'app', 'components', parentPath, name);

  return gulp.src(paths.blankServiceTemplates)
    .pipe(template({
      name: name,
      appName: angularModuleName,
      upCaseName: cap(name)
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
});

gulp.task('docs', (cb) => {
  const config = require('./jsdoc.conf.json');
  gulp.src(['src/web-client/README.md', 'src/web-client/**/*.js'], {read: false})
    .pipe(jsdoc(config, cb));
});