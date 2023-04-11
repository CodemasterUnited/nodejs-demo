module.exports = (req, res) => {
	var exec = require('child_process').exec('npm install camelcase', function(err, stdout, stderr) {
		if (err) return res.status(200).send(err);
	});

	exec.on('exit', function() {
		var {camelCase} = require('camelcase');
		res.status(200).send(camelCase('foo-bar'));
	}

	res.status(200).send(' Completed');
}
