const remote = require("electron").remote;

var minimise = document.getElementById("minimise");
var maximise = document.getElementById("maximise");
var quit = document.getElementById("quit");

minimise.addEventListener("click", minimiseApp);
maximise.addEventListener("click", maximiseApp);
quit.addEventListener("click" ,quitApp);

function minimiseApp(){
    console.log("app min");
    remote.BrowserWindow.getFocussedWindow().minimize();

}

function maximiseApp(){

    remote.BrowserWindow.getFocussedWindow().maximize();

}

function quitApp(){

    remote.getCurrentWindow().quit();
}

