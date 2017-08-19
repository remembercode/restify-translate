# 边翻译边搭建
## 翻译阅读进度

### 参考资料

1. [restify构建REST服务](http://blog.fens.me/nodejs-restify/)
1. [Official Server API](http://restify.com/docs/server-api/)

### 当前进度
	
	未开启
	测试....

	
	
	
	
## 什么是REST?

	REST(Representational State Transfer表述性状态转移)是一种针对网络应用的设计和开发方式.
	可以降低开发的复杂性，提高系统的可伸缩性。
	REST 定义了一组体系架构原则，您可以根据这些原则设计以系统资源为中心的 Web 服务.
	包括使用不同语言编写的客户端如何通过 HTTP 处理和传输资源状态。 
	如果考虑使用它的 Web 服务的数量，REST 近年来已经成为最主要的 Web 服务设计模式。
	事实上，REST 对 Web 的影响非常大，由于其使用相当方便，已经普遍地取代了基于 SOAP 和 WSDL 的接口设计。
	REST中的资源所指的不是数据，而是数据和表现形式的组合.
	比如“最新访问的10位会员”和“最活跃的10位会员”在数据上可能有重叠或者完全相同.
	而由于他们的表现形式不同，所以被归为不同的资源.
	这也就是为什么REST的全名是Representational State Transfer的原因。
	资源标识符就是URI(Uniform Resource Identifier).
	不管是图片，Word还是视频文件，甚至只是一种虚拟的服务.
	也不管你是xml格式、txt文件格式还是其它文件格式。
	全部通过 URI对资源进行唯一的标识。

	文字介绍，摘自: http://baike.baidu.com/view/1077487.htm
	引用自，http://blog.fens.me/nodejs-restify/

	
## restify介绍

	restify是一个基于Nodejs的REST应用框架，支持服务器端和客户端。
	restify比起express更专注于REST服务，去掉了express中的template, render等功能。
	同时强化了REST协议使用，版本化支持，HTTP的异常处理。
	restify提供了DTrace功能，为程序调式带来新的便利！
	restifty的发布页：http://mcavage.me/node-restify/
	
	
## restify安装
	系统环境
		Cygwin : Cygwin 2.8.2-1 on Windows 10 2016 LTSB 
		node: v8.4.0
		npm: 5.3.0




## 创建简单服务
	cd D:\Works\WorkSpace\ZIYA7_Task
	npm init
	



## 服务端参数

	var restify = require('restify');

	var server = restify.createServer({
	  certificate: ...,
	  key: ...,
	  name: 'MyApp',
	});
	

