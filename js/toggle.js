var toggle = document.getElementById('darkmode');
var body = document.querySelector('body');
var container = document.getElementById('container');
var text = document.getElementById('texto');
var derecha = document.getElementById('rightBox');
var copyright = document.getElementById('copyright');


toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    container.classList.toggle('active');
    text.classList.toggle('active');
    derecha.classList.toggle('active');
    copyright.classList.toggle('active');
}