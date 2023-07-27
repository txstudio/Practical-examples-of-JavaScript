var _data = [
	{
		fieldName: "product.name",
		fieldValue: "Surface Go 3"
	},{
		fieldName: "product.price",
		fieldValue: "15999"
	},{
		fieldName: "product.brand",
		fieldValue: "Microsoft"
	}
];

console.log('source-data', _data);

var _output = Object.fromEntries(
	_data.map((x) => [x.fieldName, x.fieldValue])
);

console.log('output-data', _output);

//output-data-json {"product.name":"Surface Go 3","product.price":"15999","product.brand":"Microsoft"}
console.log('output-data-json', JSON.stringify(_output));
