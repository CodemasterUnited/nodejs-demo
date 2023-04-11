module.exports = (req, res) => {
	var require('child_process').exec('npm ls --json',
	res.status(200).send('Helllllo');
require('child_process').exec('npm ls --json', function(err, stdout, stderr) {
    if (err) return cb(err)
    cb(null, JSON.parse(stdout));
  });
}
