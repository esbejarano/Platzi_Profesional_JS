import MediaPlayer from './MediaPlayer';
import AutoPlay from '../plugins/AutoPlay';
import AutoPause from '../plugins/AutoPause';
import AdsPlugin from '../plugins/index';

const video = document.querySelector("video");
const button: HTMLElement = document.getElementById("playButton");
button.onclick = () => { player.togglePlay(); };
const muteButton: HTMLElement = document.getElementById("muteButton");
muteButton.onclick = function () { player.toggleMute(); };
const player = new MediaPlayer(
    { 
        el: video, 
        plugins: [ new AutoPlay(), new AutoPause(), new AdsPlugin() ] 
    }
);

// block scope = let y const en funciones, loops, etc
// function scope = function(){}
// global scope = var
// module scope script type="imports"
// closures

if ('serviceWorker' in navigator) {
    const options: RegistrationOptions = {scope: "./",type:"module"};
    navigator.serviceWorker.register(new URL('/assets/js/sw.js', import.meta.url)).catch(error => {
        console.error(error.message);
    });
}