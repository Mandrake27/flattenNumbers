const array = [
	{
		a: [1],
		b: {
			c: '',
			j: [{
				b: [1, 2, 3]
			},
			[2]]
		}
	}
];

const searchNumbers = (arr) => {
	const numArr = Object.values(arr).map(elem => {
		if (typeof elem === 'number') {
			return elem;
		}
		return searchNumbers(elem);
	});
	return numArr.flat();
};
