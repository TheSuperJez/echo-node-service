**Install & Startup**

to install:   
```
npm install
```
to run:   
```
npm start
```


**Invoke**

Curl:

```
	POST /api/echo HTTP/1.1
	Host: localhost:8080
	Content-Type: application/json
	Cache-Control: no-cache
	Postman-Token: 510b5783-be89-2bd2-e383-b13c4f5e90c4

	{
		"expect": {
			"contentType": "application/json",
			"response": {"message": "Hola Mundo"},
			"statuscode": 200
		}
	}
```
where "response" in the expect section is the json to be returned by the service, contenType is the ContentType's response and statusCode is the HTTP StatusCode to be returned.   

Default entrypoints:   

| http://<host>:<port>/api      | API Specification entrypoint |
|-------------------------------|------------------------------|
| http://<host>:<port>/api-docs | Swagger API Documentation    |

