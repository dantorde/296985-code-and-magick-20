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

var FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var COUNT_WIZARDS = 4;

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
    wizards[i] = {
      name: getRandomValue(Wizard.NAMES) + ' ' + getRandomValue(Wizard.SURNAMES),
      coatColor: getRandomValue(COATCOLORS),
      eyesColor: getRandomValue(EYESCOLORS),
    };
  }
  return wizards;
};

/**
 * создание HTML для волшебника
 * @param {object} item — объект
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

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var nameInput = document.querySelector('.setup-user-name');

/**
 * закрывает попап, удаляет обработчик события по нажатию на Esc в открытом попапе
 */
var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

/**
 * вызывает функцию закрытия попапа, при нажатии Ecs в открытом попапе
 * @param {Object} evt - объект хранит последнее событие
 */
var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && nameInput !== document.activeElement) {
    evt.preventDefault();
    closePopup();
  }
};

/**
 * открывает попап, добавляет обработчик нажатия Esc
 */
var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

var setupPlayer = setup.querySelector('.setup-player');
var wizardCoat = setupPlayer.querySelector('.wizard-coat');
var inputCoatColor = setupPlayer.querySelector('input[name = "coat-color"]');
var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
var inputEyesColor = setupPlayer.querySelector('input[name = "eyes-color"]');
var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');
var inputFireballColor = setupPlayer.querySelector('input[name = "fireball-color"]');

wizardCoat.addEventListener('click', function () {
  inputCoatColor.value = wizardCoat.style.fill = getRandomValue(COATCOLORS);
});

wizardEyes.addEventListener('click', function () {
  inputEyesColor.value = wizardEyes.style.fill = getRandomValue(EYESCOLORS);
});

wizardFireball.addEventListener('click', function () {
  inputFireballColor.value = wizardFireball.style.backgroundColor = getRandomValue(FIREBALL);
});

