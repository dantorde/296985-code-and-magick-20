'use strict';

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

var COUNT_WIZARDS = 4;

var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');

/**
 * генерация случайного элемента массива
 * @param {array} array - массив
 * @return {string} - случайный элемент массива
 */
var getRandomValue = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

/**
* генерация массива объявлений
* @param {number} count - длина массива
* @return {array} - массив
*/
var createWizards = function (count) {
  var wizard = [];
  for (var i = 0; i < count; i++) {
    wizard[i] = {
      name: getRandomValue(Wizard.NAMES) + ' ' + getRandomValue(Wizard.SURNAMES),
      coatColor: getRandomValue(COATCOLORS),
      eyesColor: getRandomValue(EYESCOLORS),
    };
  }
  return wizard;
};

/**
 * создание метки на основе template
 * @param {object} item - элемент
 * @return {element} - элемент
 */
var createWizardCard = function (item) {
  var wizardTemplate = document.querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');
  var wizardCard = wizardTemplate.cloneNode(true);
  var label = wizardCard.querySelector('.setup-similar-label');
  label.textContent = item.name;
  var coat = wizardCard.querySelector('.wizard-coat');
  coat.style.fill = item.coatColor;
  var eyes = wizardCard.querySelector('.wizard-eyes');
  eyes.style.fill = item.eyesColor;
  return wizardCard;
};

/**
 * генерация меток на основе созданного массива объявлений
 * @param {array} dataWizards - массив объктов
 * @return {object} объект
 */
var generateWizard = function (dataWizards) {
  var wizardsFragment = document.createDocumentFragment();
  dataWizards.forEach(function (dataWizard) {
    wizardsFragment.appendChild(createWizardCard(dataWizard));
  });
  return wizardsFragment;
};

var wizardsList = document.querySelector('.setup-similar-list');
var dataWizards = createWizards(COUNT_WIZARDS);
wizardsList.appendChild(generateWizard(dataWizards));

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
