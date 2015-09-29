// 'use strict';
var paths;

paths = {
  rootDir: './',
  src: 'app',
  build: 'build',
  development: 'build/development',
  production: 'build/production',
  srcAssets: 'app/_assets',
  devAssets: 'build/assets',
  productionAssets: 'build/production/assets',
  bowerSrc: 'app/_assets/_bower_components'
};

module.exports = {
  /**
   *
   * browserSync.
   *
   */
  browserSync: {
    development: {
      server: {
        baseDir: [paths.development, paths.build, paths.src]
      },
      // xip: true,
      port: 9988,
      files: [
        paths.devAssets + '/css/*.css',
        paths.devAssets + '/js/*.js',
        paths.devAssets + '/images/**',
        './**/*.html'
      ]
    },
    production: {
      server: {
        baseDir: [paths.production]
      },
      port: 9989
    }
  },

  /**
   *
   * Delete
   *
   */
  delete: {
    src: [paths.devAssets]
  },

  /**
   *
   * jekyll
   *
   */
  jekyll: {
    development: {
      src: paths.src,
      dest: paths.development,
      config: '_config.yml'
    },
    product: {
      src: paths.src,
      dest: paths.production,
      config: '_config.yml,_config.build.yml'
    }
  },

  /**
   *
   * sass Compile Option.
   *
   */
  sass: {
    src: paths.srcAssets + '/_sass/**/*.{sass,scss}',
    dest: paths.devAssets + '/css',
    sourceRoot: 'scss/',
    root: paths.rootDir,
    options: {
      precision: 10,
      sourceComments: false,
      errLogToConsole: true,
      outputStyle: 'compressed',
      includePaths: [
        paths.bowerSrc + '/foundation/scss/'
      ]
    }
  },

  autoprefixer: {
    browsers: [
      'ie >= 10',
      'ie_mob >= 10',
      'ff >= 30',
      'chrome >= 34',
      'safari >= 7',
      'opera >= 23',
      'ios >= 7',
      'android >= 4.4',
      'bb >= 10'
    ],
    cascade: true
  },

  /**
   *
   * Images
   *
   */
  images: {
    src: paths.srcAssets + '/img/**/*',
    dest: paths.devAssets + '/img/'
  },

  copySvg: {
    src: paths.devAssets + '/img/**/*.svg',
    dest: paths.productionAssets + '/img/'
  },

  /**
   *
   * JavaScript.
   *
   */
  browserify: {
    bundleConfigs: [{
      entries: './' + paths.srcAssets + '/js/app.js',
      dest: paths.devAssets + '/js',
      outputName: 'app.js'
    }],
    debug: true,
    // extensions: ['js', 'jsx'],
  },

  /**
   *
   * main-bower-files
   *
   */
  mainBowerFiles: {
    bowerPath: paths.srcAssets + '/_bower_components',
    bowerjsonPath: './',
    bowerrcPath: './',
    dest: paths.srcAssets + '/lib'
  },


  /**
   * [jshint description]
   * @type {Object}
   */
  jshint: {
    src: [paths.srcAssets + '/js/**/*.js']
  },

  /**
   *
   * watch
   *
   */
  watch: {
    jekyll: [
      '_config.yml',
      '_config.build.yml',
      paths.src + '/_data/**/*.{json,yml,csv}',
      paths.src + '/_includes/**/*.{html,xml}',
      paths.src + '/_layouts/*.html',
      paths.src + '/_locales/*.yml',
      paths.src + '/_plugins/*.rb',
      paths.src + '/_posts/*.{markdown,md}',
      paths.src + '/**/*.{html,markdown,md,yml,json,txt,xml}',
      paths.src + '/*'
    ],
    sass: paths.srcAssets + '/_sass/**/*.{sass,scss}',
    scripts: paths.srcAssets + '/js/**/*.js',
    images: paths.srcAssets + '/img/**/*',
    post_image: paths.src + '/images/**/*'
  },
  /**
   *
   * Optimize
   *
   */
  optimize: {
    css: {
      src: paths.devAssets + '/css/*.css',
      dest: paths.productionAssets + '/css/',
      options: {
        keepSpecialComments: 0
      }
    },
    js: {
      src: paths.devAssets + '/js/*.js',
      dest: paths.productionAssets + '/js/',
      options: {
        mangle: false,
        preserveComments: 'some'
      }
    },
    images: {
      src: paths.devAssets + '/img/**/*.{jpg,jpeg,png,gif}',
      dest: paths.productionAssets + '/img/',
      options: {
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
      }
    }
  },

  /**
   *
   * rsync
   *
   */
  rsync : {
    src: paths.production + '/**',
    options: {
      destination: 'kenty/kenty.github.io.git',
      root: paths.production,
      hostname: 'github.com',
      username: 'git',
      incremental: true,
      progress: true,
      relative: true,
      emptyDirectories: true,
      recursive: true,
      clean: true,
      exclude: ['.DS_Store'],
      include: []
    }
  },

  /**
   *
   * gh-pages
   *
   */
  ghPages: {
    src: paths.production + '/**/*',
    options: {
      branch: 'master',
      cacheDir: ''
    }
  }
};
