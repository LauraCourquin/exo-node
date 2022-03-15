var information = require('./information')

var cowsay = require("cowsay");



console.log(cowsay.say({ text :`Im ${information.me.name}, ${information.me.campus}`}));

