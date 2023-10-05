const { createConfig } = require('@astral/commitlint-config');

module.exports = createConfig({
  scopes: ['ui'],
  ticketPrefix: 'RADAR',
});
