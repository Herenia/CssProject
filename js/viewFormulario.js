var butValidar = window.document.getElementById("butValidar");

var butIniciar = window.document.getElementById("butIniciar");

// var txtDni = window.document.getElementById("txtDni");
var txtNombre = window.document.getElementById("txtNombre");
var txtApellidos = window.document.getElementById("txtApellidos");
var txtTelefonoFijo = window.document.getElementById("txtTelefonoFijo");
// var txtDireccion = window.document.getElementById("txtDireccion");
// var txtCP = window.document.getElementById("txtCP");
// var txtProvincia = window.document.getElementById("txtProvincia");
// var txtFNac = window.document.getElementById("txtFNac");
var txtEmail = window.document.getElementById("txtEmail");
// var casillasSexo = window.document.getElementById("divRadio");
// var selCoche = window.document.getElementById("selCoche");

var casillasExtra = window.document.getElementById("divCasillas");
var validar = window.document.getElementById("divValidar");

var clearRender = function(e) {
    nodo = window.document.getElementById(e).getElementsByTagName('span')[0];
    if (nodo && nodo.parentNode) {
        nodo.parentNode.removeChild(nodo);
    }
}

var renderError = function(e) {
    clearRender(e);
    var span= window.document.createElement('span');
    span.innerHTML = "<img src='./img/bad.png'>";
    window.document.getElementById(e).appendChild(span);
}

var renderOk = function(e) {
    clearRender(e);
    var span= window.document.createElement('span');
    span.innerHTML = "<img src='./img/ok.png'>";
    window.document.getElementById(e).appendChild(span);
}

var renderHelp = function() {
    validar.innerHTML = '<div id="divValDni">Dni:</div><div id="divValNombre">Nombre:</div><div id="divValApellidos">Apellidos:</div><div id="divValTlfF">Teléfono:</div><div id="divValDireccion">Dirección:</div><div id="divValCP">CP:</div><div id="divValProvincia">Provincia:</div><div id="divValFNac">Fecha de Nacimiento:</div><div id="divValEmail">E-mail:</div><div id="divValRadio">Sexo:</div><div id="divValSelCoche">Vehículo:</div><div id="divValCExtra">Semana:</div>'
}

function validarDni() {
    !testDni(txtDni,5,10) ? renderError('divValDni'):renderOk('divValDni');
}
function validarTexto() {
    !testTexto(txtNombre,3,100) ? renderError('divValNombre'):renderOk('divValNombre');
}
function validarTextoApellidos() {
    !testTextoApellidos(txtApellidos,3,100) ? renderError('divValApellidos'):renderOk('divValApellidos');
}
function validarTelefonoFijo() {
    !testTelefonoFijo(txtTelefonoFijo) ? renderError('divValTlfF'):renderOk('divValTlfF');
}
function validarTextoDireccion() {
    !testTextoDireccion(txtDireccion,3,100) ? renderError('divValDireccion'):renderOk('divValDireccion');
}
function validarCP() {
    !testCPNacional(txtCP) ? renderError('divValCP'):renderOk('divValCP');
}
function validarTextoProvincia() {
    !testTextoProvincia(txtProvincia,3,100) ? renderError('divValProvincia'):renderOk('divValProvincia');
}
function validarFecha() {
    !testFecha(txtFNac) ? renderError('divValFNac'):renderOk('divValFNac');
}
function validarEmail() {
    !testEmail(txtEmail) ? renderError('divValEmail'):renderOk('divValEmail');
}

// ************************
function validarSexo() {
    !validarRadio(casillasSexo) ? renderError('divValRadio'):renderOk('divValRadio');
}
// ******************
function validarLista() {
    !testLista(selCoche) ? renderError('divValSelCoche'):renderOk('divValSelCoche');
}
function validarCasillas() {
    !testCasillas(casillasExtra,1,5) ? renderError('divValCExtra'):renderOk('divValCExtra');
}
function validaForm() {
    renderHelp();
    !testDni(txtDni,5,10) ? renderError('divValDni'):renderOk('divValDni');
    !testTexto(txtNombre,3,100) ? renderError('divValNombre'):renderOk('divValNombre');
    !testTextoApellidos(txtApellidos,3,100) ? renderError('divValApellidos'):renderOk('divValApellidos');
    !testTelefonoFijo(txtTelefonoFijo) ? renderError('divValTlfF'):renderOk('divValTlfF');
    !testTextoDireccion(txtDireccion,3,100) ? renderError('divValDireccion'):renderOk('divValDireccion');
    !testCPNacional(txtCP) ? renderError('divValCP'):renderOk('divValCP');
    !testTextoProvincia(txtProvincia,3,100) ? renderError('divValProvincia'):renderOk('divValProvincia');
    !testFecha(txtFNac) ? renderError('divValFNac'):renderOk('divValFNac');
    !testEmail(txtEmail) ? renderError('divValEmail'):renderOk('divValEmail');
    !validarRadio(casillasSexo) ? renderError('divValRadio'):renderOk('divValRadio');
    !testLista(selCoche) ? renderError('divValSelCoche'):renderOk('divValSelCoche');
    !testCasillas(casillasExtra,1,5) ? renderError('divValCExtra'):renderOk('divValCExtra');

    if (!testDni(txtDni,5,10) && !testTexto(txtNombre,3,100) && !testTextoApellidos(txtApellidos,3,100) && !testTelefonoFijo(txtTelefonoFijo) && !testTextoDireccion(txtDireccion,3,100) && !testCPNacional(txtCP) && !testTextoProvincia(txtProvincia,3,100) && !testFecha(txtFNac) &&    !testEmail(txtEmail) && !validarRadio(casillasSexo) && !testLista(selCoche) && !testCasillas(casillasExtra,1,5)) {alert("Validado")}
    else {alert(" Revise hay un error no puede ser enviado")};
}
window.onload = function() {
    txtDni.addEventListener('input',validarDni,false);
    txtNombre.addEventListener('input',validarTexto,false);
    txtApellidos.addEventListener('input',validarTextoApellidos,false);
    txtTelefonoFijo.addEventListener('input',validarTelefonoFijo,false);
    txtDireccion.addEventListener('input',validarTextoDireccion,false);
    txtCP.addEventListener('input',validarCP,false);
    txtProvincia.addEventListener('input',validarTextoProvincia,false);
    txtFNac.addEventListener('input',validarFecha,false);
    txtEmail.addEventListener('input',validarEmail ,false);
    casillasSexo.addEventListener('input',validarSexo ,false);
    selCoche.addEventListener('change',validarLista  ,false);
    casillasExtra.addEventListener('change',validarCasillas  ,false);
    butValidar.addEventListener('click',validaForm ,false);
    butIniciar.addEventListener('click',renderHelp ,false);
}