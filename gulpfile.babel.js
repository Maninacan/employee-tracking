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

const publicRoot = 'src/public',
  serverRoot = 'src',
  angularModuleName = 'employeeTracking';

var paths = {
  js: path.join(publicRoot, 'app', 'components', '**/*!(.spec.js).js'), // exclude spec files
  scss: path.join(publicRoot, 'app', '**/*.scss'), // stylesheets
  html: [
    path.join(publicRoot, 'app', '**/*.html'),
    path.join(publicRoot, 'index.html')
  ],
  entry: path.join(__dirname, publicRoot, 'app', 'app.js'),
  output: publicRoot,
  componentTemplates: path.join(__dirname, 'generator', 'component/**/*.*'),
  serviceTemplates: path.join(__dirname, 'generator', 'service/**/*.*'),
  // serverComponentTemplates: path.join(__dirname, 'generator', 'service/**/*.*')
  serverComponentTemplates: path.join(__dirname, 'generator', 'server-component/**/*.*')
};

gulp.task("webpack", (cb) => {
  // run webpack
  webpack(webpackConfig, (err, stats) => {
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

gulp.task('generate:component', () => {
  generate(
    path.join(publicRoot, 'app', 'components'),
    paths.componentTemplates
  )
});

gulp.task('generate:service', () => {
  generate(
    path.join(publicRoot, 'app', 'components'),
    paths.serviceTemplates
  );
});

gulp.task('generate:server-component', () => {
  generate(
    path.join(serverRoot),
    paths.serverComponentTemplates
  );
});

function generate(destPath, templates) {
  const cap = (val) => val.charAt(0).toUpperCase() + val.slice(1);
  const name = yargs.argv.name;

  return gulp.src(templates)
    .pipe(template({
      name: name,
      appName: angularModuleName,
      upCaseName: cap(name)
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(path.join(destPath, name)));
}

gulp.task('docs', (cb) => {
  const config = require('./jsdoc.conf.json');
  gulp.src(['public/README.md', 'public/**/*.js'], {read: false})
    .pipe(jsdoc(config, cb));
});