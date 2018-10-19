/**
 * @fileoverview Configuration de base de l'application
 * @module config/app
 * @requires {@link external:path}
 */

const path = require('path');

/**
 * Configuration
 * @namespace
 */
const app = {
  /**
   * Port du serveur
   * @type {number}
   * @default 3000
   */
  port: process.env.PORT || 3002,

  /**
   * Path du fichier de log du serveur
   * @type {string}
   */
  logFile: path.join(__dirname, '../../../logs/combined.log'),

  /**
   * Type de sortie de log (JSON ou NORMAL)
   * @type {string}
   */
  logType: 'JSON',

  /**
   * Dossier contenant les fichiers à exposer
   * @type {string}
   */
  dataFolder: path.join(__dirname, '../../../data'),
};

module.exports = app;
