const quotes = [
	'How can someone be racist and have acne? Like bro, worry about your own skin.',
	'Yeah I support gay rights, I\'m gay and I\'m right',
	'help im trapped in a pensquid quote factory',
	'i will eat your nose off',
	'i would be rich if bibles were accepted as legal tender',
	'wait that can be a quote',
	'Who the hell pinged me in the middle of my god damn French TOAST',
	'everything I say could be a quote',
	'this is just like that gorge orson book 1885',
	'just realized ppl collaborate on software sometimes *dies*',
	'I believe in god that\'s why I wear gucci brand jesus cologne',
	'i eat sheet music then stick quarter inch audio cables into my skull',
	'pizza cutter gang',
	'Cheese is a loaf of milk',
	'I\'ve eaten two blocks of cheese in one sitting btw',
	'I\'m pretty sure if a lemon was packed full of high grade explosives, it would make cuts happen',
	'We\'re damned to hell either way, why not further incur the wrath of the heavens?',
	'pensquid more like pwnsquad',
	'ban/mute for procrastination - we wont ban you rn tho we\'ll get to it later'
]

document.getElementById('quote').innerHTML = `
	&ldquo;${quotes[Math.floor(Math.random() * quotes.length)].replace(/'/g, '&rsquo;')}&rdquo;
	<br>
	- member of the forum
`