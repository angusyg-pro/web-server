/**
 * @fileoverview Service pour les dossiers
 * @module services/folders
 * @requires {@link external:fs-extra}
 * @requires {@link external:directory-structure-json}
 * @requires config/app
 */

const dirJson = require('directory-structure-json');
const fs = require('fs-extra');
const config = require('../config/app');

const service = {};

/**
 * Renvoie la structure du dossier data
 * @returns {Promise<object>} résolue avec la structure du dossier data, rejettée sur erreur
 */
service.getStructure = () => new Promise((resolve, reject) => {
  dirJson.getStructure(fs, config.dataFolder, (err, structure) => {
    if (err) return reject(err);
    return resolve(structure);
  });
});

module.exports = service;
