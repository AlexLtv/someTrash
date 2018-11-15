$('#subm').click( function() {
	let res = 0,
	 	mainTier = $("#need-tier").val(),
		lesserTeir = $("#low-tier").val(),
		whatTier = $("#how").val(),
	 	sellPrice = $("#sell-price").val(),
	 	quantity = $("#quant").val(),
	 	back = $("#back").val();


	let	backPers = back / 100,
	 	quant = +quantity,
	 	resQuant = +quantity;

	 		while (quant > 1) {
	 			resQuant += +(quant * backPers).toFixed();
	 			quant = +(quant * backPers).toFixed();
	 		}


	let calcOne = +(mainTier * whatTier) + +lesserTeir;
	 	res = +(sellPrice * resQuant) - +(calcOne * quantity);
	 	// debugger
	$("#result").text(res);
})





