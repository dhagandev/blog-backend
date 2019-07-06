let posts = [
	{
		name: 'Andrew',
		body: "Professor, make a woman out of me. I love this planet! I've got wealth, fame, and access to the depths of sleaze that those things bring. Shut up and get to the point! Bender! Ship! Stop bickering or I'm going to come back there and change your opinions manually!"
		postDate: '2016-04-12T21:32:13.956Z'
	},
	{
		name: 'Shahzad',
		body: "The swallow may fly south with the sun, and the house martin or the plover may seek warmer climes in winter, yet these are not strangers to our land. Why? Listen. Strange women lying in ponds distributing swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony."
		postDate: '2012-02-07T04:05:23.452Z'
	},
	{
		name: 'Erin',
		body: "Kids, you tried your best and you failed miserably. The lesson is, never try. Slow down, Bart! My legs don't know how to be as long as yours. Attempted murder? Now honestly, what is that? Do they give a Nobel Prize for attempted chemistry?"
		postDate: '2016-10-18T20:27:05.113Z'
	}
]

module.exports = {

}

function getAll() {
	return posts;
}

function getOne(id) {
	return posts[id];
}

function create(post) {
	return posts.push(post);
}

function deleteOne(id) {
	posts.splice(id, 1);
}

function update(id, post) {
	posts[id] = post;
}