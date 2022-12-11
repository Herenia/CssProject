function testDni(campo,min,max) {
    min = (typeof min === 'undefined') ? 0 : min;
    max = (typeof max === 'undefined') ? "" : max;
    var valor = campo.value;
    var expresion = "[0-9]{"+ min + "," + max + "}$";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}

function testTexto(campo,min,max) {
    min = (typeof min === 'undefined') ? 0 : min;
    max = (typeof max === 'undefined') ? "" : max;
    var valor = campo.value;
    var expresion = "[a-zA-Z\\sá-úÁ-Ú'à-ùÀ-Ùä-üÄ-Ü]{"+ min + "," + max + "}$";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}
function testTextoApellidos(campo,min,max) {
    min = (typeof min === 'undefined') ? 0 : min;
    max = (typeof max === 'undefined') ? "" : max;
    var valor = campo.value;
    var expresion = "[a-zA-Z\\sá-úÁ-Ú'à-ùÀ-Ùä-üÄ-Ü]{"+ min + "," + max + "}$";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}

function testEmail(campo) {
    var valor = campo.value;
    var expresion = "^[\\w\\-\\.]{3,}@([\\w\\-\\.]{2,})\\.[\\w\\-]{2,4}$";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}
function testTextoDireccion(campo,min,max) {
    min = (typeof min === 'undefined') ? 0 : min;
    max = (typeof max === 'undefined') ? "" : max;
    var valor = campo.value;
    var expresion = "[a-zA-Z0-9\\sá-úÁ-Ú'à-ùÀ-Ùä-üÄ-Ü]{"+ min + "," + max + "}$";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}
function testCPNacional(campo) {
    var valor = campo.value;
    var expresion = "^([0-5][0-9]\\d{3}|(070|071|080)\\d{2})$";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}
function testTextoProvincia(campo,min,max) {
    min = (typeof min === 'undefined') ? 0 : min;
    max = (typeof max === 'undefined') ? "" : max;
    var valor = campo.value;
    var expresion = "[a-zA-Z\\sá-úÁ-Ú'à-ùÀ-Ùä-üÄ-Ü]{"+ min + "," + max + "}$";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}
function testTelefonoFijo(campo) {
    var valor = campo.value;
    var expresion = "^(\\+\\d{2,3}|00\\d{2})?[6789]\\d{8}$";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}



function testFecha(campo) {
    var valor = campo.value;
    var expresion ="(^(((0[1-9]|1\\d|2[0-8])\/(0[1-9]|1[0-2]))|((31\/(0[13578]|1[02]))|((29|30)\/(0[1,3-9]|1[0-2]))))\/\\d{4}$)|(^(29\/02)\/((0[48]00|[13579][26]00|[2468][048]00)|(\\d{2})?(0[48]|[2468][048]|[13579][26]))$)";
    var rExp = new RegExp(expresion);
    return rExp.test(valor);
}

function testLista (select) {
    var index = select.selectedIndex;
    return (index===null) ? -1:index;
}

function testCasillas (casillas, min,max) {
    min = (typeof min === 'undefined') ? 0 : min;
    max = (typeof max === 'undefined') ? "" : max;
    var seleccionados = casillas.querySelectorAll('input[type="checkbox"]:checked');
    if (seleccionados.length <min || seleccionados.length>max )
        return false;
    else
        return seleccionados;
}

function validarRadio (radio) {
    var seleccionado = radio.querySelectorAll('input[type="radio"]:checked');
    return (seleccionado.length == 0) ? false:seleccionado;
}