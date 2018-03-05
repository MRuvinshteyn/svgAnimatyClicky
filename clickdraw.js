//Michael Ruvinshteyn
//SoftDev2 pd07
//K08 -- Animation Nation
//2018 - 03 - 04

var svg = document.getElementById('vimage'); 
var size;
var grow; 
var x;
var y; 
var dx;
var dy; 
var path;
var frame;
var doAnim; 
var animation;
var maxRad;

var main = function() {
    svg = document.getElementById('vimage');

    size = 0;
    grow = 1;
    x = 290;
    y = 300;
    dx = Math.random()*2 + 1;
    dy = Math.random()*2 + 1;
    doAnim = false;
    animation = 0;
    maxRad = 50;

    path = 'dvd.png';
}

var drawExpand = function() {
    if (doAnim && animation == 1) {
        stopAnim();
    }
    if (!doAnim) {
        animation = 0;
        expand();
        doAnim = true;
    }
}

var expand = function() {
    size += grow;
    if (size < 0 || size > 50) {
        grow *= -1;
    }

    svg.innerHTML = '';
    drawCircle();

    frame = window.requestAnimationFrame(expand);
    //console.log(frame)
}

var drawShift = function() {
    if (doAnim && animation == 0) {
        stopAnim();
    }
    if (!doAnim) {
        animation = 1;
        shift();
        doAnim = true;
    }
}

var shift = function() {
    x += dx;
    y += dy;

    if (x - 50 < 0 || x + 50 > 600) {
        dx *= -1;
        if (x - 50 < 0) {
            x = 50;
        } 
        else {
            x = 600 - 50;
        }
    }
    if (y - 25 < 0 || y + 25 > 600) {
        dy *= -1;
        if (y - 25 < 0) {
            y = 25;
        } 
        else {
            y = 600 - 25;
        }
    }

    svg.innerHTML = '';
    drawImg();

    frame = window.requestAnimationFrame(shift);
}

var drawCircle = function() {
    var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', size);
    circle.setAttribute('fill', 'black');
    svg.appendChild(circle);
}

var drawImg = function() {
    var img = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    img.setAttribute('x', x - 50);
    img.setAttribute('y', y - 25);
    img.setAttribute('width', 100);
    img.setAttribute('height', 50);
    img.setAttribute('href', path);
    svg.appendChild(img);
}

var stopAnim = function() {
    window.cancelAnimationFrame(frame);
    doAnim = false;
    size = 0;
    dx = Math.random()*2 + 1;
    dy = Math.random()*2 + 1;
    svg.innerHTML = "";
}
