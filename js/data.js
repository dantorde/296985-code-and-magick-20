'use strict';
(function () {
  var Wizard = {
    NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
  };

  var COATCOLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var nameWizard = window.util.getRandomValue(Wizard.NAMES) + ' ' + window.util.getRandomValue(Wizard.SURNAMES);
  var coatColorWizard = window.util.getRandomValue(COATCOLORS);
  var eyesColorWizard = window.util.getRandomValue(EYESCOLORS);

  /**
  * генерация массива объявлений
  * @param {number} count - длина массива
  * @return {array} - массив
  */
  var createDataWizards = function (count) {
    var wizards = [];
    for (var i = 0; i < count; i++) {
      wizards[i] = {
        name: nameWizard,
        coatColor: coatColorWizard,
        eyesColor: eyesColorWizard,
      };
    }
    return wizards;
  };

  window.data = {
    create: createDataWizards
  };
})();
