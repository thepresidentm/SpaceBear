import { dataset } from "./dataset.js";

let planeta, arrayLongitud, capaObjetos, atributosObjetos,
objetos, posiciones, i;

planeta = new WorldWind.WorldWindow("canvasOne");
planeta.addLayer(new WorldWind.BMNGOneImageLayer());
planeta.addLayer(new WorldWind.BMNGLandsatLayer());
planeta.addLayer(new WorldWind.ViewControlsLayer(planeta));
planeta.navigator.range = 300e5;

arrayLongitud = dataset.length;
// Crear capa
capaObjetos = new WorldWind.RenderableLayer("objetos");
planeta.addLayer(capaObjetos);
// Añadir imagen
atributosObjetos = new WorldWind.PlacemarkAttributes(null);
// atributosObjetos.imageSource = WorldWind.configuration.baseUrl + "images/pushpins/white-dot.png";

objetos = new Array();
posiciones = new Array();

for(i = 0; i < arrayLongitud; i++){
    // Crear objeto
    posiciones[i] = new WorldWind.Position(dataset[i]['lng'], dataset[i]['lat'], dataset[i]['height']);
    objetos[i] = new WorldWind.Placemark(posiciones[i], false, atributosObjetos);

    // Mostrar objeto
    objetos[i].alwaysOnTop = true;
    capaObjetos.addRenderable(objetos[i]);
}