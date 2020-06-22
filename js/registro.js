function validarEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  } else {
    alert("Ingrese una dirección de correo válida.");
    return false;
  }
}

function adaptarEnlaceFormulario(enlace, comodinCorreo, textoEmail) {
  return enlace.replace(comodinCorreo, textoEmail);
}

function enviarFormulario(elCampoTexto) {
  if (elCampoTexto.value) {
    if (validarEmail(elCampoTexto.value)) {
      urlEnviar = adaptarEnlaceFormulario(enlace, comodinCorreo, elCampoTexto.value)
      window.open(urlEnviar, '_blank');
      return true;
    } else {
      return false;
    }
  } else {
    console.log("Campo email vacio.");
    alert("Por favor ingrese una dirección de correo electrónico.")
    return false;
  }
}

function enviarFormulario1() {
  var elCampoTexto = document.getElementById("email1");
  return enviarFormulario(elCampoTexto);
}

function enviarFormulario2() {
  var elCampoTexto = document.getElementById("email2");
  return enviarFormulario(elCampoTexto);
}

var formEmail1 = document.getElementById("formEmail1");
var formEmail2 = document.getElementById("formEmail2");
formEmail1.onsubmit = enviarFormulario1;
formEmail2.onsubmit = enviarFormulario2;

var comodinCorreo = "---correo---";
var enlace = "https://docs.google.com/forms/d/e/1FAIpQLSdqvC-Nww2nQMhT_Kw4rSi7vcu8VDGJ0pdIVeKJ8847tAGWYg/formResponse?usp=pp_url&entry.1506346546=" + comodinCorreo + "&submit=Submit";
