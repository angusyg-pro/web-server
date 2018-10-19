/**
 * @fileoverview Express application
 * @module app
 * @requires {@link external:express}
 * @requires {@link external:body-parser}
 * @requires {@link external:path}
 * @requires {@link external:cors}
 * @requires config/app
 * @requires lib/errorhandler
 * @requires routes/main
 */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const appCfg = require('./config/app');
const errorHandler = require('./lib/errorhandler');

// Importation des routers
const mainRouter = require('./routes/main');

// Configuration de l'application
const app = express();

app.set('port', appCfg.port);

// Middleware CORS
app.use(cors(appCfg.crossOrigin));

// Body parser pour extraire vers un json le body ou les paramètres
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Client
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/dist')));
}

// Fichiers statiques à servir
app.use('/sites', express.static(path.join(__dirname, '../../data')));

// Ajout des routes
app.use('/', mainRouter);

// Gestion des erreurs
app.use(errorHandler.errorNoRouteMapped);
app.use(errorHandler.errorHandler);

module.exports = app;
