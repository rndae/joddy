function adaptarEnlaceFormulario(enlace, comodinCorreo, textoEmail) {
  return enlace.replace(comodinCorreo, textoEmail);
}

function enviarFormulario(elCampoTexto) {
  if (elCampoTexto.value) {
    urlEnviar = adaptarEnlaceFormulario(enlace, comodinCorreo, elCampoTexto.value)
    window.open(urlEnviar, '_blank');
  } else {
    console.log("Campo email vacio.");
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

document.getElementById("formEmail1").onsubmit = enviarFormulario1;
document.getElementById("formEmail2").onsubmit = enviarFormulario2;

var comodinCorreo = "---correo---";
var enlace = "https://docs.google.com/forms/d/e/1FAIpQLSdqvC-Nww2nQMhT_Kw4rSi7vcu8VDGJ0pdIVeKJ8847tAGWYg/formResponse?usp=pp_url&entry.1506346546=" + comodinCorreo + "&submit=Submit";
