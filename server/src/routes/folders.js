/**
 * @fileoverview Router pour les dossiers
 * @module routes/folders
 * @requires {@link external:express}
 * @requires controllers/folders
 */

const express = require('express');
const foldersController = require('../controllers/folders');

const router = express.Router({ mergeParams: true });

/**
 * Renvoie la structure du dossier data
 * @path {GET} /folders
 * @name /folders
 */
router.get('/', foldersController.getStructure);

module.exports = router;
