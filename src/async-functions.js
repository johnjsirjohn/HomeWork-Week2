const superagent = require('superagent');
const request = require('request');
const nock = require('nock');

function getTatooineResidents() {
	return new Promise((resolve, reject) => {
		superagent
			.get('https://swapi.co/api/planets/1/')
			.then((res) => resolve(res.body.residents))
			.catch((error) => console.log(error));
	});
}
getTatooineResidents();

function promiseMeAString(promiseSolution) {
	return new Promise((resolve, reject) => {
		if (promiseSolution) resolve('You kept the Promise!');
		reject('You have failed me!');
	});
}
promiseMeAString();

module.exports.getTatooineResidents = getTatooineResidents;

module.exports.promiseMeAString = promiseMeAString;
