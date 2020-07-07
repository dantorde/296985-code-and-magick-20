'use strict';
(function () {
  var COATCOLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var setup = document.querySelector('.setup');
  var form = setup.querySelector('.setup-wizard-form');
  var setupPlayer = setup.querySelector('.setup-player');
  var wizardCoat = setupPlayer.querySelector('.wizard-coat');
  var inputCoatColor = setupPlayer.querySelector('input[name = "coat-color"]');
  var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
  var inputEyesColor = setupPlayer.querySelector('input[name = "eyes-color"]');
  var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');
  var inputFireballColor = setupPlayer.querySelector('input[name = "fireball-color"]');

  /**
   * изменние цвета элемента по событию
   * @param {evt} evt - событие
   */
  var changeColor = function (evt) {
    if (evt.target.matches('.wizard-coat')) {
      var newColorC = window.util.getRandomValue(COATCOLORS);
      wizardCoat.style.fill = inputCoatColor.value = newColorC;
      wizard.onCoatChange(newColorC);
    } else if (evt.target.matches('.wizard-eyes')) {
      var newColorE = window.util.getRandomValue(EYESCOLORS);
      wizardEyes.style.fill = inputEyesColor.value = newColorE;

      wizard.onEyesChange(newColorE);
    } else if (evt.target.matches('.setup-fireball')) {
      inputFireballColor.value = wizardFireball.style.backgroundColor = window.util.getRandomValue(FIREBALL);
    }
  };
  form.addEventListener('click', changeColor);

  return window.wizard = wizard;
})();
