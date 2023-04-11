module.exports = (req, res) => {
	res.status(200).send('Helllllo');
	require('child_process').exec('npm install camelcase', function(err, stdout, stderr) {
		if (err) return res.status(200).send(err);
		import camelCase from 'camelcase';

		res.status(200).send(camelCase('foo-bar'));
	});
}
