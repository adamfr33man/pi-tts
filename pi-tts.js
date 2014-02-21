/*globals require, console */
var http = require('http');
var url = require('url');
var fs = require('fs');

var flite = require('flite');

var document = fs.readFileSync(__dirname + '/pi-tts.html');

console.log("Starting server on 9615");

http.createServer(function (req, res) {
    'use strict';

    var url_parts = url.parse(req.url, true).query;

    console.log("---");
    console.log("Request - " + url.parse(req.url, true).pathname);

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    if (url.parse(req.url, true).pathname === "/speak") {
        res.write("Speak: " + url_parts.msg);
        console.log("Speak: " + url_parts.msg);

        if (typeof (url_parts.msg) !== "undefined") {
            //putt().speak(url_parts.msg);
            flite(function (err, speech) {
                speech.say(url_parts.msg, function (err) {
                    if (err) {
                        console.error('I\'m afraid I can\'t do that, Dave', err);
                    }
                });
            });
        }
    } else if(url.parse(req.url, true).pathname === "/display") {
        
    } else if (url.parse(req.url, true).pathname === "/reload") {
        document = fs.readFileSync(__dirname + '/pi-tts.html');
        res.write("reload");
        console.log("Reloaded HTML");
    } else {
        console.log("Serving HTML");
        res.write(document);
    }

    res.end();

    console.log("---\n");
}).listen(9615);
