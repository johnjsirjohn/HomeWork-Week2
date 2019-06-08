const peoples = [ { name: 'Henry', age: 9 }, { name: 'John', age: 20 } ];
function groupAdultsByAgeRange(peoples) {
	const result = peoples.filter((people) => people.age > 18);
	console.log(result);

	return {};
}

groupAdultsByAgeRange(peoples);
module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;
