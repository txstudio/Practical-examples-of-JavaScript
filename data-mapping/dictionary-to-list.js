var _data = {
	"product.name": "Surface Go 3",
	"product.price": "15999",
	"product.brand": "Microsoft"
};

console.log('source-data', _data);

var _output = [];
for(var _key in _data)
{
	_output.push({ fieldName: _key, fieldValue: _data[_key] });
}

console.log('output-data', _output);

//output-data-json [{"fieldName":"product.name","fieldValue":"Surface Go 3"},{"fieldName":"product.price","fieldValue":"15999"},{"fieldName":"product.brand","fieldValue":"Microsoft"}]
console.log('output-data-json', JSON.stringify(_output));
