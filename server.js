var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    sprintf=require('sprintf').sprintf,
    fs=require('fs');

app.use(express.static(__dirname, '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.post('/logger', function(req, res) {
    res.json({ok: true});

    if(req.body.type === 'debug') {
        console.log('debug::', req.body.message, JSON.stringify(req.body.data));
    } else if(req.body.type === 'error') {
        console.log('error::', req.body.message, JSON.stringify(req.body.data));
    } else if(req.body.type === 'exception') {
        console.log('::  exception:Message   ::', req.body.message);
        console.log('::  exception:URL       ::', req.body.url);
        console.log('::  exception:Trace     ::');
        Object.keys(req.body.stackTrace).forEach(function(key) {
            console.log('::', sprintf('%s',req.body.stackTrace[key]));
        });
    }
});

app.get('/data', function(req, res) {
    res.json(data);
});

app.listen(8080);

console.log('Express listening on port 8080');

var data = [{
    id: 0,
    joined: '2000-12-02',
    name:'John',
    city:'Chandler',
    orderTotal: 52,
    orders: [
        {
            id: 1,
            product: 'Shoes',
            total: 10
        } , {
            id: 2,
            product: 'Pants',
            total: 15
        } , {
            id: 3,
            product: 'Hoodie',
            total: 20
        } , {
            id: 4,
            product: 'Shirt',
            total: 7
        }
    ]
} , {
    id: 1,
    joined: '2000-12-02',
    name:'John',
    city:'Chandler',
    orderTotal: 9.9956,
    orders: [
        {
            id: 1,
            product: 'Shoes',
            total: 9.9956
        }
    ]
}];