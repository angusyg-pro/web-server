/**
 * @fileoverview Controleur pour les dossiers
 * @module controllers/foldersService
 * @requires services/folders
 */

const foldersService = require('../services/folders');

const controller = {};

controller.getStructure = (req, res, next) => {
  foldersService.getStructure()
    .then(result => res.status(200).json(result))
    .catch(err => next(err));
};

module.exports = controller;
