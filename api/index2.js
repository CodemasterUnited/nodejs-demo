module.exports = (req, res) => {
	var out = 'AB';
	var exe = require('child_process').exec('npm install camelcase');

	exe.on('exit', function() {
		var {camelCase} = require('camelcase');
		out = 'hhhh' + camelCase('foo-bar') + 'bbn';
		res.status(200).send(out);
	});

	res.status(200).send(out);
}
