const path = require('path');
const fs = require('fs');
const watch = require('node-watch');
const markdown_include = require('no1-markdown-include');
const exec = require('child_process');
const chapters = path.resolve('D:/Works/Personal/00000043.restify_translate/chapters');
const configs = path.resolve('D:/Works/Personal/00000043.restify_translate/configs.json');
const entry = path.resolve('D:/Works/Personal/00000043.restify_translate/main.md');
watch(
	[
		chapters,
		configs,
		entry
	], 
	{ 
		recursive: true 
	}, 
	function(evt, name) {
        markdown_include.compileFiles(configs)
	}
);