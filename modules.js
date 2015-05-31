function getParams() {
	var x = window.location.search.split["?"];
	x = x[1] | x[0];
	x = x.split["&"]
	var z = {}
	var w;
	for (var y = 0; y < x.length; y++;) {
		w = x[y].split["="]
		z[w[0]]=w[1];
	}
	return z;
};