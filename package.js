Package.describe({
  name: "iamkevingreen:meteor-pickadate",
  git: "https://github.com/iamkevingreen/meteor-pickadate.git",
  summary: "Meteor packaging of amsul/pickadate.js",
  "version": "3.4.5"
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.use('jquery', 'client');

  api.addFiles('pickadate.js/lib/picker.js', 'client');
  api.addFiles('pickadate.js/lib/picker.date.js', 'client');
  api.addFiles('pickadate.js/lib/picker.time.js', 'client');
  api.addFiles('pickadate.js/lib/themes/classic.css', 'client');
  api.addFiles('pickadate.js/lib/themes/classic.date.css', 'client');
  api.addFiles('pickadate.js/lib/themes/classic.time.css', 'client');
});
