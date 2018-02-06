/**
 * index.js
 * Jorge Esteban Zaragoza Salazar
 * @class Index
 */
import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import api from './api';
import config from '../ws-config.json';
import yaml from 'yamljs';
import swagger from 'swagger-ui-express';

const swaggerDocument = yaml.load(__dirname + '/swagger.yaml');
/**
* Property to setup the Express HTTP Server
* 
* @property app
* @type {Object}
*/
let app = express();
app.server = http.createServer(app);

app.use(morgan('dev'));

app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit: config.bodyLimit
}));

app.use('/api', api({ config }));
app.use('/api-docs', swagger.serve, swagger.setup(swaggerDocument));

app.server.listen(process.env.PORT || config.port, () => {
	console.log(`Started on port ${app.server.address().port}`);
});
