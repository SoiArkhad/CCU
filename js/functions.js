console.log('mostrando modal');

$(document).ready(function () {
	$('#intro').modal('show');
});

document.getElementById('currentYear').innerHTML = new Date().getFullYear();