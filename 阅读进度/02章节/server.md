## 创建 server 的示意

	var restify = require('restify');

	var server = restify.createServer({
	  certificate: ...,
	  key: ...,
	  name: 'MyApp',
	});
	
