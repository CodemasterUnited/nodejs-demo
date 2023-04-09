module.exports = (req, res) => {
function npmls(cb) {
  require('child_process').exec('npm ls --json', function(err, stdout, stderr) {
    if (err) return alert(err)
    res.status(200).send(JSON.parse(stdout));
  });
}
npmls('gg');
	const name = req.query.name || 'stranger';
	res.status(200).send(`Hello, ${name}!`)
}
