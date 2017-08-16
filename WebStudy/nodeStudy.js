var s = 'Hello';
var a = 'Good morning'

function hello(name) {
    console.log(s + ', ' + name + '!');
}

function good(name) {
    console.log(a + ', ' + name + '!');
}

module.exports = {
	hello:hello,
	good:good
};