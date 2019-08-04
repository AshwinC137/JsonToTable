var data = {"data":{"k1":"value1","k2":"value2","k3":{"k4":"value4","k5":{"k6":"value6","k11":12,"k12":{k13:undefined}}},"k7":null,"k8":{},"k9":[],"k10":true}};
function traverse(node,key){
	let objKeys;
	if(node === null || node === undefined){
		console.log(key);
		console.log(node);
		return;
	}
	else
		objKeys = Object.keys(node);	
    if(isSingular(node))
	{
		console.log(key);
		console.log(node);
	}
	else if(isArray(node)){
		console.log(key);
		console.log("Array");//handle arrays
	}
	else if(objKeys.length === 0){
		console.log(key);
		console.log("Empty Object");//handle empty objects
	}
	else{
		for(var k in objKeys){
			traverse(node[objKeys[k]],objKeys[k]);
		}
	}
}

function isSingular(node){
	if(node instanceof String || typeof(node) === 'string' || typeof(node) === 'number' || typeof(node) === 'boolean')
		return true;
	return false;
}

function isArray(node){
	if(node instanceof Array)
		return true;
	return false;
}