const { Router } = require('express');

const ongController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');


const routes = Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.store);

routes.post('/incidents', incidentController.store);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.destroy);

routes.get('/profile', profileController.index);

module.exports = routes;