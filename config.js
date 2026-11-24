// ================================================================
//  CONFIGURACIÓN — lo único que hay que tocar para cambiar la página
// ================================================================
window.CONFIG = {
  // Nombre (título de la pestaña) y la frase que aparece arriba
  para: "Mariela",
  arriba: "Para que lo veas cuando estés enojada :)",

  // Cuándo me fui (para la barra de progreso). Hora de Costa Rica = -06:00
  salida: "2026-11-26T01:26:00-06:00",

  // Candado: antes de esta hora solo se ve una cuenta atrás y la carta queda oculta.
  // Si se deja vacío (""), se usa la hora de salida.
  abre: "2026-11-26T01:26:00-06:00",
  candadoTexto: "Se abre en",

  // Cuándo nos volvemos a ver (la meta de la cuenta atrás). Hora de Costa Rica = -06:00
  reencuentro: "2027-04-05T00:00:00-06:00",

  // El mensaje. Cada texto del arreglo es un párrafo.
  // Las fotos se van intercalando entre los párrafos.
  mensaje: [
    "Hola Mari, vienen algunos meses difíciles para nosotros por pegajosos jaja, solo quiero que tengas confianza en nuestra conexión y amor, unos cuantos km (5,123) no nos van a ganar",
    "Te extrañaré todos los días y por eso me preocuparé de cuidar nuestra relación, solo espero y quiero que tú hagas lo mismo, que me regañes si no te escribo etc, prometo traerte muchos regalos para compensar la distancia jaja, disfruta de 4 meses sin mí porque no me despegaré nunca más.",
    "Te amo con mi vida Mariela Núñez, nunca había estado tan seguro de amar a alguien y si no eres tú no es nadie, gracias por hacer mi vida más linda e iluminarla con tu brillo, te amo novia/mejor amiga/persona favorita."
  ],
  firma: "Con cariño, tu novio",

  // Fotos, en el orden en que aparecen. La primera va grande arriba.
  // archivo = nombre dentro de la carpeta fotos/ · pie = texto chiquito opcional
  fotos: [
    { archivo: "cerquita.jpg", pie: "" },
    { archivo: "cine.jpg", pie: "" },
    { archivo: "spiderman.jpg", pie: "" },
    { archivo: "cafe.jpg", pie: "" }
  ]
};
