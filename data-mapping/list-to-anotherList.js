var _data = [
	{
		FileName: "question.md",
		ContentType: "text/plain",
		ContentLength: 1563
	},{
		FileName: "meme-cat.jpg",
		ContentType: "image/jpg",
		ContentLength: 148656
	},{
		FileName: "release-noted.pdf",
		ContentType: "application/pdf",
		ContentLength: 5462214
	}
];

console.log('source-data', _data);

var _output = _data.map((x) => {
	return {
		name: x.FileName,
		length: x.ContentLength
	}
});

console.log('output-data', _output);
console.log('output-data-json', JSON.stringify(_output));
