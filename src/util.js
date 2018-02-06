/**
 * util.js
 * Jorge Esteban Zaragoza Salazar
 * @class Util
 */

/**
* Method to handle the HTTP request.
*
* @method handleRequest
* @param {Object} req HTTP Request Object
* @param {Object} res HTTP Response Object
*/
let handleRequest = (req, res) => {
	try {
		let contentType = req.body.expect.contentType;
		let response = req.body.expect.response;
		let statusCode = req.body.expect.statuscode;
		if(!contentType || !response || !statusCode) {
			throw `Bad request, we need an application/json petition with the following content:
            {"expect": {"contentType": "application/json", "response": {"message": "Hola Mundo"}, "statuscode": 200}}`;
		}
		res.contentType = contentType;
		res.statusCode = statusCode;
		res.json(response);
	} catch (e) {
		res.statusCode = 400;
		res.contentType = 'application/json';
		res.json(
			{
				'message': e
			}
		);
	}
};

export default handleRequest;
