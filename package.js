Package.describe({
  name: 'kaamodt:playing-cards-ui',
  summary: 'Template for displaying simple playing cards.',
  version: '0.7.2',
  git: 'https://github.com/kaamodt/meteor-playing-cards-ui.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['templating'], 'client');
  api.addFiles(['lib/client/playing_card_ui.html', 'lib/client/playing_card_ui_helpers.js', 'lib/client/playing_card_ui.css' ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('kaamodt:playing-cards-ui');
});
