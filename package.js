Package.describe({
    summary: "Neat - A lightweight semantic grid framework for Sass and Bourbon (SCSS version)."
});

Package.on_use(function (api) {
    api.use(['scss','bourbon'], 'client');
});