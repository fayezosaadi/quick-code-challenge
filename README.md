# quick-code-challenge

Inspired by: https://gist.github.com/Overbryd/1029706

Create a simple persistent key/value storage capable of SET, GET and DELETE actions.

It is forbidden to use Redis, MongoDB, or other ready made key/value solutions, only storage to file, databases, serialization are allowed.

Application should be RESTful meaning the following should all work when you're finished (assuming it's running on port 3000)

```
curl -X GET http://localhost:3000/hello
[]

curl -X POST --data '{"data": "hello!"}' http://localhost:3000/hello
{"data": "hello!"}

curl -X GET http://localhost:3000/hello
{"data": "hello!"}

curl -X DELETE http://localhost:3000/hello
# Should resolve to a 200 response - body is optional

curl -X GET http://localhost:3000/hello
# Should resolve to a 404 - body is optional
```

Responses can vary, status codes should not. 

Treat this the same as a PR, so production-quality code, tests, etc.
