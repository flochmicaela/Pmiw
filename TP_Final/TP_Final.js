//Variables
let imagenes = [], textos = []; botonIzq = []; botonDer = []
let escenaActual = 1;
let anchoCanvas = 640; let altoCanvas = 480;
let x1, y1, ancho1, alto1;
let x2, y2, ancho2, alto2;
let centroX1, centroY1, centroX2, centroY2;
let miFuente; miFuenteDos;

//Carga de imagenes (en arreglo)
function preload() {
  miFuente = loadFont('fonts/rans____.ttf');
  miFuenteDos = loadFont('fonts/arial.ttf');
  let cantidadImagenes = 6;
  for (let i = 0; i < cantidadImagenes ; i++) {
    let rutasImagenes = 'images/img' + i + '.jpg'; //Guardar ruta: rutasImagenes[images/img0.jpg, images/img1.jpg, images/img2.jpg]
    imagenes[i] = loadImage(rutasImagenes);  //Cargar imagen: imagenes[img0, img1, img2]
  }
}

function setup() {
  createCanvas(anchoCanvas, altoCanvas);
  //Inicializacion de textos
  textos[0] = "Alumnas:      Floch Micaela\n                     Fernandez Maria Pilar\nComision1:   Bugiolachi Jose Luis\n                     Cardos Fernando\nCortazar Julio";
  textos[1] = "LA NOCHE\n BOCA ARRIBA"; 
  textos[2] = "texto";
  textos[4] = "texto";
}

function draw() {
  fill(219,182,127);
  stroke(255);
  //Mostrar la imagen y el texto de la escena actual
  image(imagenes[escenaActual], 0, 0);
  text(textos[escenaActual], 0 + anchoCanvas / 6, 0 + altoCanvas / 4);
  
  
  
  //Rectangulo izquierdo
  x1 = 80; y1 = 300; ancho1 = 160; alto1 = 60;
  centroX1 = x1 + ancho1 / 2;
  centroY1 = y1 + alto1 / 2;
  //Rectangulo derecho
  x2 = 400; y2 = 300; ancho2 = 160; alto2 = 60;
  centroX2 = x2 + ancho2 / 2;
  centroY2 = y2 + alto2 / 2;
  
  //Mostrar rectangulos cuando corresponda
  if(escenaActual == 1){
    rect(x1, y1, ancho1, alto1);
    rect(x2, y2, ancho2, alto2); 
    textFont(miFuente);
    textSize(60);
    text(textos[escenaActual], 0 + anchoCanvas / 6, 0 + altoCanvas / 4);
  }  
  
  if(escenaActual == 0){
    rect(x1, y1, ancho1, alto1);
    textFont(miFuenteDos);
    textSize(30);
    text(textos[escenaActual], 0 + anchoCanvas / 6, 0 + altoCanvas / 4);
  }
    
  if(escenaActual == 2){
    noStroke();
    textFont(miFuenteDos);
    textSize(12);
    text(textos[escenaActual], 0 + anchoCanvas / 6, 0 + altoCanvas / 4);
  }
  
  if(escenaActual == 3){
    rect(x1, y1, ancho1, alto1);
    rect(x2, y2, ancho2, alto2);
    textFont(miFuenteDos);
    textSize(30);
    text(textos[escenaActual], 0 + anchoCanvas / 6, 0 + altoCanvas / 4);
  }
  
  if(escenaActual == 5){
    rect(x1, y1, ancho1, alto1);
    rect(x2, y2, ancho2, alto2);
  }
  
}

function mousePressed() {
  if( escenaActual == 1){
    if( botonPresionado(centroX1, centroY1, alto1, ancho1) ){
      escenaActual = 0;
    }
    if( botonPresionado(centroX2, centroY2, alto2, ancho2) ){
      escenaActual = 2;
    }
  }
  
  else if( escenaActual == 0){
    if( botonPresionado(centroX1, centroY1, alto1, ancho1) ){
      escenaActual = 1;
    }
  }
  else if( escenaActual == 2){
    escenaActual = 3;
  }
  else if( escenaActual == 3){
    if( botonPresionado(centroX1, centroY1, alto1, ancho1) ){
      escenaActual = 4;
    }
    
    
    if( botonPresionado(centroX2, centroY2, alto2, ancho2) ){
      escenaActual = 4;
    }
  }
  else if( escenaActual == 4){
    escenaActual = 5;
  }
  else if( escenaActual == 5){
    if( botonPresionado(centroX1, centroY1, alto1, ancho1) ){
    }
    if( botonPresionado(centroX2, centroY2, alto2, ancho2) ){
    }
  }
    
    
 
}

//Reseteo apretando la R
function keyPressed() {
  if (key === 'r' || key === 'R') { // Verifica si se presionó 'R' o 'r'
    escenaActual = 1
  }
}
  
//Ver si el mouse está dentro de un boton especifico  
function botonPresionado(centroX, centroY, alto, ancho){
  return (mouseX > centroX - ancho / 2 && mouseX < centroX + ancho / 2 && mouseY < centroY + alto / 2 && mouseY > centroY - alto / 2)
}
