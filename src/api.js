/**
 * api.js
 * Jorge Esteban Zaragoza Salazar
 * @class API
 */
import { version } from '../package.json';
import { Router } from 'express';
import echo from './util';

/**
* Function to create the Route Handler and URI mappings. 
*
* @method createRouteHandler
* @param {Object} config HTTP Request Object
* @return {Object} Returns an Express Router configured with URI Mappings.
*/
let createRouteHandler = ({ config }) => {
	let api = Router();
	
	console.log('Config: ');
	console.log(config);

	api.get('/', (req, res) => {
		res.json({ version });
	});

	api.post('/echo', (req, res) => {
		echo(req, res);
	});

	api.post('/auth', (req, res) => {
		echo(req, res);
	});

	api.get('/list', (req, res) => {
		echo(req, res);
	});

	api.put('/user', (req, res) => {
		echo(req, res);
	});

	return api;
};

export default createRouteHandler;
