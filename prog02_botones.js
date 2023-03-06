function suma(){
	x=parseInt(document.datos.v1.value);
	y=parseInt(document.datos.v2.value);
	r=x+y
	document.datos.opera.value="Suma";
	document.datos.res.value=r;

}
function resta(){
	x=parseInt(document.datos.v1.value);
	y=parseInt(document.datos.v2.value);
	r=x-y
	document.datos.opera.value="Resta";
	document.datos.res.value=r;

}
function multiplicacion(){
	x=parseInt(document.datos.v1.value);
	y=parseInt(document.datos.v2.value);
	r=x*y
	document.datos.opera.value="Multiplicacion";
	document.datos.res.value=r;

}
function division(){
	x=parseInt(document.datos.v1.value);
	y=parseInt(document.datos.v2.value);
	r=x/y
	document.datos.opera.value="Division";
	document.datos.res.value=r;

}
