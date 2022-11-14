/// <reference types="cypress" />
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(
    '..',
    'sauselab/config',
    `${file}.json`,
  );

  return fs.readJson(pathToConfigFile);
}
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  const file = config.env.fileConfig || 'cred';
  return getConfigurationByFile(file);
  

}
