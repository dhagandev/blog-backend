module.exports = {
	testFunction
}

function testFunction(req, res) {
  res.send({ title: 'Express backend used to test frontend connections.' });
}