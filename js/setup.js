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
  var wizards = [];
  for (var i = 0; i < count; i++) {
    wizard[i] = {
      name: getRandomValue(Wizard.NAMES) + ' ' + getRandomValue(Wizard.SURNAMES),
      coatColor: getRandomValue(COATCOLORS),
      eyesColor: getRandomValue(EYESCOLORS),
    };
  }
  return wizards;
};

/**
 * создание HTML для волшебника
 * @param {object} wizard — объект, описывающий волшебника
 * @return {element} - элемент
 */
var createWizardCard = function (item) {
  var wizardTemplate = document.querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');
  var wizardCard = wizardTemplate.cloneNode(true);
  wizardCard.querySelector('.setup-similar-label').textContent = item.name;
  wizardCard.querySelector('.wizard-coat').style.fill = item.coatColor;
  wizardCard.querySelector('.wizard-eyes').style.fill = item.eyesColor;

  return wizardCard;
};

/**
 * генерация меток на основе созданного массива объявлений
 * @param {array} htmlWizards - массив объктов
 * @return {object} объект
 */
var generateWizard = function (htmlWizards) {
  var wizardsFragment = document.createDocumentFragment();
  htmlWizards.forEach(function (dataWizard) {
    wizardsFragment.appendChild(createWizardCard(dataWizard));
  });
  return wizardsFragment;
};

var wizardsList = document.querySelector('.setup-similar-list');
var htmlWizards = createWizards(COUNT_WIZARDS);
wizardsList.appendChild(generateWizard(htmlWizards));

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
