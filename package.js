Package.describe({
  name: "robertlowe:pickadate",
  git: "https://github.com/robertlowe/meteor-pickadate.git",
  summary: "Meteor packaging of amsul/pickadate.js using the default theme",
  "version": "3.5.5"
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.use('jquery', 'client');

  api.addFiles('pickadate.js/lib/picker.js', 'client', {raw: true});
  api.addFiles('pickadate.js/lib/picker.date.js', 'client', {raw: true});
  api.addFiles('pickadate.js/lib/picker.time.js', 'client', {raw: true});
  api.addFiles('pickadate.js/lib/legacy.js', 'client', {raw: true});
  api.addFiles('pickadate.js/lib/themes/default.css', 'client');
  api.addFiles('pickadate.js/lib/themes/default.date.css', 'client');
  api.addFiles('pickadate.js/lib/themes/default.time.css', 'client');
});
