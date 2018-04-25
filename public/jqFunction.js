//JQUERY PART

$ ( "#registerform" ).hide();

$( "#register" ).click(function() {
	$ ( "#formulaire" ).hide();
	$ ( "#register" ).hide();
	$ ( "#registerform" ).show();
});

$( "#back" ).click(function() {
	$ ( "#formulaire" ).show();
	$ ( "#register" ).show();
	$ ( "#registerform" ).hide();
});

//Hide form deployment
$( "#AddD" ).hide();

//Add dep button
$( "#AddDep" ).click(function() {
	$( "#AddD" ).show(500);
	$( "#AffDep" ).hide(500);
	$( "#Search" ).hide(500);
	$( "#search" ).hide(500);
	$( "#Searchf" ).hide(500);
})

//Cancel button
$( "#Cancel" ).click(function() {
	$( "#AddD" ).hide(500);
	$( "#AffDep" ).show(500);
	$( "#Search" ).show(500);
	$( "#search" ).show(500);
	$( "#Searchf" ).show(500);		
})

$( "#disco" ).click(function() {
	$(location).attr('href', '/');
	console.log("Disconnect...")	
})
