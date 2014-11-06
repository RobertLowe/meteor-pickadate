Package.describe({
  name: "riamkevingreen:meteor-pickadate",
  git: "https://github.com/iamkevingreen/meteor-pickadate.git",
  summary: "Meteor packaging of amsul/pickadate.js",
  "version": "3.4.5"
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.use('jquery', 'client');

  api.addFiles('pickadate.js/lib/picker.js', 'client');
  api.addFiles('pickadate.js/lib/picker.date.js', 'client');
  api.addFiles('pickadate.js/lib/picker.time.js', 'client');
  api.addFiles('pickadate.js/lib/themes/default.css', 'client');
  api.addFiles('pickadate.js/lib/themes/default.date.css', 'client');
  api.addFiles('pickadate.js/lib/themes/default.time.css', 'client');
});
