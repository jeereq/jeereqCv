"use strict";

var NUMBER = 10; //code a executer des le chargement de la page

window.onload = function () {
  // declaration des variables 
  var AllLiens = document.querySelectorAll('li a');
  var button = document.querySelector('.moi button');
  var menu = document.querySelector('.menu');
  var icon = document.querySelector('li.icon');
  var main = document.querySelector('.corps');
  var hidden = document.querySelector('.hidden');
  var slogant = document.querySelector('.image');
  var sectionAbout = document.querySelector('section#about');
  var principal = document.querySelector('main'); //appel des fonctions 

  buttonLoad(button);
  hash(); //les events

  principal.addEventListener('scroll', function (e) {
    console.log(e);
  });
  hidden.addEventListener('click', function (e) {
    e.stopPropagation();
  });
  main.addEventListener('click', function (e) {
    var hidden = document.querySelector('.hidden');
    var icon = document.querySelector('li.icon');
    var menu = document.querySelector('.menu');

    if (hidden.classList.contains('active')) {
      hidden.classList.remove('active');
      icon.querySelector('img').classList.toggle('icon');
      menu.classList.toggle('active');
    }

    e.stopPropagation();
  });
  menu.addEventListener('click', function (e) {
    var hidden = document.querySelector('.hidden');
    var icon = document.querySelector('li.icon');
    hidden.classList.toggle('active');
    icon.querySelector('img').classList.toggle('icon');
    this.classList.toggle('active');
    e.stopPropagation();
    aleatbtn(slogant, NUMBER);
  });
  icon.addEventListener('click', function (e) {
    var hidden = document.querySelector('.hidden');
    var menu = document.querySelector('.menu');
    this.querySelector('img').classList.toggle('icon');
    hidden.classList.toggle('active');
    menu.classList.toggle('active');
    e.stopPropagation();
    aleatbtn(slogant, NUMBER);
  }); // executions d'autre script

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = AllLiens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var lien = _step.value;
      lien.addEventListener('click', clickLien);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}; // code a executer lors du resize


window.onresize = function () {
  var button = document.querySelector('.moi button');
  buttonLoad(button);
};

function hash() {
  if (location.hash) location.hash = '';
} // declaration des fonctions


function buttonLoad(btn) {
  var parent = btn.parentNode;
  var left = (parent.clientWidth - btn.clientWidth) / 2;
  btn.style.marginLeft = left + 'px';
  btn.style.transition = '1s';
}

function clickLien() {
  var parent = this.parentNode;
  var grandParent = parent.parentNode;
  if (parent.classList.contains('active')) return false;
  grandParent.querySelector('li.active').classList.remove('active');
  parent.classList.add('active');
}

function aleatbtn(lieux, nombre) {
  var Max = 15;
  var AleatMax = lieux.offsetWidth - Max;
  var AleatHeight = lieux.offsetHeight - Max;
  if (!lieux.querySelector('.boule')) for (var i = 0; i < nombre; i++) {
    var element = document.createElement('div');
    var aleat = Math.random();
    Math.round(Math.random()) ? element.classList.add('boule') : element.classList.add('bouleW');
    lieux.appendChild(element);
    element.style.height = aleat * Max + 'px';
    element.style.width = aleat * Max + 'px';
    element.style.top = Math.random() * AleatHeight + 'px';
    element.style.left = Math.random() * AleatMax + 'px';
  }
}