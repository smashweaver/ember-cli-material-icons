/* eslint-env node */
'use strict';

const path = require('path');
const fs = require('fs');
const assetPath = __dirname;
const absoluteFontsPath = path.join(assetPath, 'vendor', 'fonts');
const fontsToImport = fs.readdirSync(absoluteFontsPath);

module.exports = {
  name: 'ember-cli-material-icons',

  included() {
    this._super.included.apply(this, arguments);

    let app = findHost(this);
    this.app = app;

    fontsToImport.forEach((fontFilename) => {
      let filePath = path.join('vendor/fonts', fontFilename);
      app.import(filePath, { destDir: '/assets/fonts' });
    });
  }
};

function findHost(addon) {
  let current = addon;
  let app;

  do {
    app = current.app || app;
  } while (current.parent.parent && (current = current.parent));

  return app;
}