const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('src/js/app.js', 'dist')
   .sass('src/scss/app.scss', 'dist/app.css')
   .options({
       postCss: [tailwindcss('./tailwind.config.js')],
   });


mix.webpackConfig({
    watchOptions: {
        ignored: /node_modules/
    }
});


if (!mix.inProduction()) {
    // Enable sourcemaps in development
    mix.webpackConfig({
        devtool: 'source-map'
    }).sourceMaps();
}

if (mix.inProduction()) {
    mix.webpackConfig({
        optimization: {
            minimize: true,
            splitChunks: {
                chunks: 'all',
            },
        },
    });

    // mix.version();
}

