module.exports = (req, res) => {
	var exe = require('child_process').exec('npm install camelcase');

	exe.on('exit', function() {
		var {camelCase} = require('camelcase');
		res.status(200).send(camelCase('foo-bar'));
	});

	res.status(200).send(exe);
}
